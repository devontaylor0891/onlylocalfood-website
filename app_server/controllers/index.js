/* GET landing page. */
module.exports.landing = function (req, res, next) {
	res.render('landing');
};

/* GET search page */
module.exports.search = function (req, res, next) {
	res.render('search');
};

/* GET about page */
module.exports.about = function (req, res, next) {
	res.render('about');
};
