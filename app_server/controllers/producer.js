var request = require('request-promise');

/* GET product page */
module.exports.product = function (req, res, next) {
	res.render('product', {
		id: 1,
		productName: 'Product1',
		producerName: 'Garden Farms',
		location: 'Moosomin',
		image: '/images/product.jpg',
		price: '9.99',
		unit: 'lb',
		description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		deliveries: [
			{
				id: 1,
				type: 'Door-to-door Delivery',
				date: 'July 3',
				location: 'Moosomin',
				startTime: '12 pm',
				endTime: '2 pm',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
			}, {
				id: 2,
				type: 'Off-farm Pickup',
				date: 'July 5',
				location: 'Moosomin',
				startTime: '12 pm',
				endTime: '2 pm',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
			}
		]
	});
};

/* GET producer page */
module.exports.producer = function (req, res, next) {
	var options = {
    method: 'GET',
    json: true,
    uri: 'http://onlylocalfoods-api.39mpginjms.us-west-2.elasticbeanstalk.com/api/users',
	};

	request(options)
    .then(function (body) {
		 	res.render('producer', body);
    })
    .catch(function (err) {
      console.log(err);
    });
};

/* GET schedule page */
module.exports.schedule = function (req, res, next) {
	res.render('schedule', {
		title: 'Producer Name',
		producerName: 'Garden Farms',
		location: 'Moosomin',
		email: 'garden@farms.com',
		products: [
			{
				id: 1,
				productName: 'Product1',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 2,
				productName: 'Product2',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 3,
				productName: 'Product3',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 4,
				productName: 'Product4',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 5,
				productName: 'Product5',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 6,
				productName: 'Product6',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		],
		deliveries: [
			{
				id: 1,
				type: 'Door-to-door Delivery',
				date: 'July 3',
				location: 'Moosomin',
				startTime: '12 pm',
				endTime: '2 pm',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
			}, {
				id: 2,
				type: 'Off-farm Pickup',
				date: 'July 5',
				location: 'Moosomin',
				startTime: '12 pm',
				endTime: '2 pm',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
			}
		]
	});
};
