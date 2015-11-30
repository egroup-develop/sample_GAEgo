var app = angular.module('myApp', []);
app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.items = [
    {key: 1, value: "伊藤里織",fileName:"saori.jpg"},
    {key: 2, value: "佐野ひなこ",fileName:"hinako.jpg"}
  ];
  $scope.ClickFunction = function(val) {
      angular.element(document.querySelector('#value')).text(val);
    }
}]);
