tdp.bg = {
	init: function() {
		$(".tdp-color").on("click", tdp.bg.click);
	},
	click: function() {
		var $color = $(this);
		var checked = $color.prop("checked");
		var $bg = $(".tdp-bg");
		if (checked) {
			$bg.attr("src", "img/color.png");
		} else {
			$bg.attr("src", "img/bw.png");
		}
	}
};