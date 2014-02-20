(function ($) {
	window.Rock = window.Rock || {};
	Rock.controls = Rock.controls || {};

	Rock.controls.itemPicker = (function () {
		var exports,
			ItemPicker = function (options) {
				this.options = options;
				console.log();
			};

		ItemPicker.prototype = {
			constructor: ItemPicker,
			doSomething: function () {
				console.log('working...');
				setTimeout(function () {
					console.log('done');
				}, 2000);
			}
		};

		ItemPicker();

		exports = {
			init: function (options) {
				
			},
			cache: {}
		};

		return exports;
	}());

}(jQuery));




