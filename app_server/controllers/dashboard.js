
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
