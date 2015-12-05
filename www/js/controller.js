angular.module('starter.controller', [])

.controller('RanAddCtrl', function($scope, Randoms) {
	$scope.options = Randoms.all();

	$scope.add = function(data) {
		$scope.data = '';
		var item = {};
		item.data = data;
		item.id = $scope.options.length + 1;
		item.Probability = 10;
		Randoms.add(item);
	}
	$scope.start = function() {
		ret = Randoms.start();
		alert(ret.data);
	}

});