function SampleController($scope) {
	$scope.click = function() {
		$scope.message1 = 'you clicked left';
		$scope.message2 = 'you clicked right';
	};
}
