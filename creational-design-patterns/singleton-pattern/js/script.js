(function (win, $) {
	var CircleGenerator = (function () {
		// The only public member outside the scope of this function would be this instance variable
		var instance;

		function init() {
			var _aCircle = [],
				_stage = $('.advert');

			function _position(circle, top, left) {
				circle.css('top', top);
				circle.css('left', left);
			}

			function create(top, left) {
				var circle = $('<div class="circle"></div>');
				_position(circle, top, left);
				return circle;
			}

			function add(circle) {
				_stage.append(circle);
				_aCircle.push(circle);
			}

			// This will tell us which index are we on in the array
			function index() {
				return _aCircle.length;
			}

			return {
				create: create,
				add: add,
				index: index
			};
		}

		return function () {
			if (!instance) {
				instance = init();
			}
			return instance;
		};

	})()
	$(win.document).ready(function () {
		$('.advert').click(function (e) {
			var cg = CircleGenerator();
			var circle = cg.create(e.pageY - 25, e.pageX - 25);
			cg.add(circle);
		});

	});

})(window, jQuery);