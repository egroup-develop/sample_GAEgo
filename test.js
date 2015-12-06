var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope,$http) {
	/*$scope.items = [{"Id":"test"}];*/
	$scope.getUsersFromLocal = function() {
		$http({method: 'GET', url:'http://localhost:8000/out.json', headers:{"Content-Type":'application/json'}}).
	success(function(data) {
		$scope.items = data;
	});
	};

	$scope.getUsersFromLocal(); //call ajax method
});
/*$scope.ClickFunction = function(val) {
	angular.element(document.querySelector('#Id')).text(val);
}
}]);*/
