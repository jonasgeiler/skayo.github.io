'use strict';

module.exports.register = function (hb) {
	hb.registerHelper('breaklines', function (str) {
		return new hb.SafeString(str.replace(/(\r\n|\n|\r)/gm, '<br>'));
	});
};