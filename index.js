(function ($) {

	var LOADING_HTML = (
		'<div class="loading-widget-box">' +
			'<div class="loading-widget-inner-box">' +
				'<i></i><i></i><i></i><i></i><i></i><i></i>' +
			'</div>' +
		'</div>'
	)

	function addLoading(el) {
		var $el = $(el)
		if ($el.children('.loading-widget-box').length > 0) {
			return
		} else {
			if ($el.css('position') === 'static') {
				$el.css('position', 'relative')
			}
			$el.append(LOADING_HTML)
		}
	}

	function removeLoading(el) {
		$(el).children('.loading-widget-box').remove()
	}

	$.fn.loading = function (method) {
		this.each(function (i, el) {
			if (method) {
				if (method === 'remove') {
					removeLoading(el)
				}
			} else {
				addLoading(el)
			}
		})
		return this
	}

})(window.$)