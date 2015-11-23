var app = angular.module('myApp', []);
app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.items = [
    {key: 1, value: "left"},
    {key: 2, value: "right"}
  ];
  $scope.ClickFunction = function(val) {
      angular.element(document.querySelector('#value')).text(val);
    }
}]);}
