$(document).ready(function() {
	tdp.init();
})

/* tdp App singleton */

var tdp = {
	init: function() {
		tdp.bg.init();
		tdp.case.init();
		tdp.position.init();
	},

	log: function(s) {
		if (typeof (window.console) != "undefined") {
			console.log(s);
		}
	}
};