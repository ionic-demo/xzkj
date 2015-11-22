angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('MainCtrl', function($scope, Mains) {

	$scope.main = Mains.all();

	$scope.remove = function(main) {
		Mains.remove(main)
	};
})

.controller('MainDeatilCtrl', function($scope, $stateParams, Main) {
	$scope.main = Mains.get($stateParams.chatId)
})

.controller('AppDeatlCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
})