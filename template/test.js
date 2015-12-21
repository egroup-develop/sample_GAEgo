var id_arr = new Array();
var choise_arr = new Array();
var count = 0;
var items = new Array();

var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope,$http) {
  $scope.getUsersFromLocal = function() {
    $http({
      method: 'GET',
      url: 'https://study-golang.appspot.com/outjson?myname=hiroki&portalname=logirl&start=5&limit=7&category=Daily%2BLoGiRL',
      headers: {"Content-Type":'application/json'}
    }).
    success(function(data) {
      // $scope.items = data;
      items = data;
      for(i=0;i<2;i++){
        choise_arr.push({"Url":data[i].Url[0] ,"Title":data[i].Title,"Id":data[i].Id});
      }
      count++;
      console.log("choise:" + choise_arr);
      $scope.choise = choise_arr;
    });
  };


  $scope.getUsersFromLocal(); //call ajax method

  $scope.ClickFunction = function(val,index) {
    angular.element(document.querySelector('#Title')).text(val);
    if(count<=items[0].Url.length){
      id_arr.push(index);
      if(count < items[0].Url.length){
        choise_arr.length = 0;
        choise_arr.push.apply(choise_arr, []);
        for(i=0;i<2;i++){
          choise_arr.push({"Url":items[i].Url[count] ,"Title":items[i].Title,"Id":items[i].Id});
        }
        $scope.choise = choise_arr;
      }
      count++;
    }else{
      $http({
        method: 'POST',
        url: '/api/',
        data: id_arr,
        headers: {"Content-Type":'application/x-www-form-urlencoded'}
      }).
      success(function(data, status, headers, config) {
        console.log("send to server");
      });
    }
    console.log("log:" + id_arr);
  }
});
