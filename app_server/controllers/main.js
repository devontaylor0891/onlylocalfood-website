/* GET landing page. */
module.exports.landing = function (req, res, next) {
	res.render('landing', { title: 'Test' });
};

/* GET dashboard page */
module.exports.dashboard = function (req, res, next) {
	res.render('dashboard');
};

/* GET search page */
module.exports.search = function (req, res, next) {
	res.render('search');
};

/* GET product page */
module.exports.product = function (req, res, next) {
	res.render('product');
};

/* GET producer page */
module.exports.producer = function (req, res, next) {
	res.render('producer');
};

/* GET schedule page */
module.exports.schedule = function (req, res, next) {
	res.render('schedule');
};