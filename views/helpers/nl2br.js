var nl2br = function () {};

nl2br.register = function (Handlebars) {
	Handlebars.registerHelper('nl2br', function (str) {
		return str.replace(/(\r\n|\n|\r)/gm, '<br>');
	})
};

module.exports = nl2br;