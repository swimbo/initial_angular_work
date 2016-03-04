// 1. Create an HTML page with a button.
// 2. Add an ng-click directive so that when you click the button a message is printed to the console.
// 3. Change the behavior of the click handler to reveal an h1 with some text in the body element.
// 4. Add another button with a click handler that reveals an unordered list with three list items in the body element.
angular.module('buttonClick',[])
.controller('buttonCtrl',function($scope){
    $scope.consoleLog = function(){
      console.log('It works!')
    }
})



//  $scope.isVisible = !$scope.isVisible
