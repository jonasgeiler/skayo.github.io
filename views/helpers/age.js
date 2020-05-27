var ageHelper = function () {};

ageHelper.register = function (Handlebars) {
	var birthday = new Date('09/22/2001');
	var now = new Date();
	var diff = now - birthday;
	var age = Math.floor(diff / 31557600000);

	Handlebars.registerHelper('age', function (str) {
		return str.replace('{age}', age);
	})
};

module.exports = ageHelper;