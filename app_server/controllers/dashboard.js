
/* GET dashboard page */
module.exports.dashboard = function (req, res, next) {
	res.render('dashboard', {
		title: 'Your Dashboard',
		orders: [
			{
				firstName: 'Bob',
				city: 'Moosomin'
			}, {
				firstName: 'Betty',
				city: 'Wapella'
			}
		]
	})
};

/* GET consumer dashboard page */
module.exports.dashboardConsumer = function (req, res, next) {
	res.render('dashboard-consumer')
};

/* GET producer dashboard page */
module.exports.dashboardProducer = function (req, res, next) {
	res.render('dashboard-producer')
};