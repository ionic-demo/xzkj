angular.module('starter.services', [])

.factory('Randoms', function() {
	var randoms = [
		{
			'id': 0,
			'itme': null,
			'Probability': 0
		}
	];

	return {
		all: function() {
			return randoms;
		},
		add: function(item) {
			randoms.push(item);
		}
	};
});