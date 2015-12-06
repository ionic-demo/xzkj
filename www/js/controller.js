angular.module('starter.controller', [])

.controller('RanAddCtrl', function($scope, $ionicModal, Randoms) {
	$scope.options = Randoms.all();
	$scope.count = 0;
	$scope.add = function(data) {	
		$scope.count = 0;
		$scope.data = '';
		var item = {};
		item.data = data;
		item.id = $scope.options.length + 1;
		item.Probability = 10;
		Randoms.add(item);
	}
	$scope.getRet = function() {
		$scope.count++;
		var ret = Randoms.start();
		return ret.data;
	}

	$scope.getRetAgain = function() {
		$scope.count++;
		var ret = Randoms.start();
		$scope.ret = ret.data;
		return $scope.ret;
		console.log(ret);
	}
	$ionicModal.fromTemplateUrl('views/ret-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.ret = $scope.getRet();
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	$scope.$on('modal.hidden', function() {

	});
	$scope.$on('modal.removed', function() {
	});
});


// });