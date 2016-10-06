$(document).ready(function(){
    $("#driver").click(function(event){
        $.getJSON('file:///Users/Melina/Documents/code/ces26/input.json', function(jd) {
            $('#stage').html('<p> Name: ' + jd.name + '</p>');
            $('#stage').append('<p> Age : ' + jd.age + '</p>');
        });
    });
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });

    $("span").parent("li").css({"color": "red", "border": "2px solid red"});    
    $("#btnblur").click(function(){
        $("#fading").fadeToggle("slow");
    })
        
});

