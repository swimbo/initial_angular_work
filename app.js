// 1. Create an HTML page with a button.

// 2. Add an ng-click directive so that when you click the button a message is printed to the console.

angular.module('buttonClick',[])

angular.module('buttonClick')
.controller('buttonCtrl',function($scope){
    $scope.consoleLog = function(){
      console.log('It works!')
    }
    $scope.toggle = true
    $scope.showHide = function(){
      $scope.toggle = !$scope.toggle
    }
})

// 3. Change the behavior of the click handler to reveal an h1 with some text in the body element.
// I'm going to go ahead and create a "new" click handler


  // Now we'll create a function that changes the ng-show based on the click


// 4. Add another button with a click handler that reveals an unordered list with three list items in the body element.
