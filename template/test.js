var id_arr = new Array();	//選択された方のidを保管
var index_arr = new Array();	//選択画面の二人の組み合わせのidを保管
var choise_arr = new Array();	//jsonから取得したデータ
var count = 0;			
var items = new Array();

var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope,$http) {
  $scope.getUsersFromLocal = function() {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/template/save_person_details.json',
      headers: {"Content-Type":'application/json'}
    }).
    success(function(data) {
      items = data;
      for(i=count;i<(count+2);i++){
        choise_arr.push({"ImageUrl":data[i].ImageUrl[0] ,"Name":data[i].Name,"Index":data[i].Index});
      }
      count = count + 2;
      $scope.choise = choise_arr;
    });
  };


  $scope.getUsersFromLocal(); //call ajax method

  $scope.ClickFunction = function(val,index) {
    angular.element(document.querySelector('#Title')).text(val);
    if(count<=10){
      id_arr.push(index);
      var first = items[count-2].Index;
      var second = items[count-1].Index;
      if(count < 10){
        choise_arr.length = 0;
        choise_arr.push.apply(choise_arr, []);
        for(i=count;i<(count+2);i++){
          choise_arr.push({"ImageUrl":items[i].ImageUrl[0] ,"Name":items[i].Name,"Index":items[i].Index});
        }
      index_arr.push(first ,second);
        $scope.choise = choise_arr;
      }
      count = count + 2;
    }
    if(count>10){
      $http({
        method: 'POST',
        url: '/api/',
        data: index_arr,id_arr,
        headers: {"Content-Type":'application/x-www-form-urlencoded'}
      }).
      success(function(data, status, headers, config) {
        console.log("send to server");
      });
	window.location.href = "/template/output.html";
    }
    console.log("versus:" + index_arr);
    console.log("choised:" + id_arr);
  }
});
