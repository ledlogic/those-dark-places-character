tdp.position = {
	init: function() {
		$(".tdp-position").on("click", tdp.position.click);
	},
	click: function() {
		var $radio = $(this);
		var position = $radio.attr("data-position");
		var value = parseInt($radio.val(), 10);

		$(".tdp-position").each(function() {
			var $anyRadio = $(this);
			var anyPosition = $anyRadio.attr("data-position");
			var anyValue = parseInt($anyRadio.val(), 10);
			if (anyPosition == position && anyValue != value) {
				$anyRadio.prop("checked", false);
			} else if (anyPosition != position && anyValue == value) {
				$anyRadio.prop("checked", false);
			} else if (anyPosition == position && anyValue == value) {
				$anyRadio.prop("checked", true);
			}
		});
	}
};