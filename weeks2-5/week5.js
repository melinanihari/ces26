var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.output = [];
    
$scope.inputt = function(){
    $scope.output.push($scope.input);
    $scope.input = '';
}
});
    
app.filter('palFilter', function() {
    return function(input) {
        var i, c, txt = "";
        for (i = 0; i < input.length/2; i++) {
            if(input[i] != input[input.length-i-1]){
                
                return null;
            }
        }
        return input;
    };
});

