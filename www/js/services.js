angular.module('starter.services', [])

.factory('Randoms', function() {
	var options = [
		{
			'id': 0,
			'data': '你好',
			'Probability': 0
		}
	];

	return {
		all: function() {
			return options;
		},
		add: function(item) {
			options.push(item);
		},
		start: function() {
			var index = Math.floor(Math.random() * options.length);
			return options[index];
		}
	};
});