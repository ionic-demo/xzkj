angular.module('starter.controller', [])

.controller('RanAddCtrl', function($scope, Randoms) {
	$scope.randoms = Randoms.all();
	$scope.add = function(itme) {
		Randoms.add(itme);
	}
});