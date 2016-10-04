// var http = require("http");

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Node!');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

var fs = require("fs");

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");


var express =  require('express');
var app = express();


app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "week3.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name: req.query.first_name,
       last_name: req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})




var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})



var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: './uploads' });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/file_upload', upload.single('file'), function (req, res, next) {

   console.log(req.file.name);
   console.log(req.file.path);
   console.log(req.file.type);
   var file = __dirname + "/" + req.file.name;
   
   fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})







var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
