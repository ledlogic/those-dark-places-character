tdp.case = {
	init: function() {
		$(".tdp-case").on("click", tdp.case.case);
	},
	case: function() {
		var $radio = $(this);
		var value = parseInt($radio.val(), 10);
		var attribute = $radio.attr("data-attribute");
		for (var i=1; i<=4; i++) {
			var $input = $("input[name=" + attribute + "-" + i + "]");
			if (i <= value) {
				$input.prop("checked", true);
			} else {
				$input.prop("checked", false);
			}
		}
	}
};