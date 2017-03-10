/* GET landing page. */
module.exports.landing = function (req, res, next) {
	res.render('landing');
};

/* GET search page */
module.exports.search = function (req, res, next) {
	res.render('search', {
		title: 'Search Results',
		products: [
			{
				id: 1,
				producerName: 'Garden Farms',
				productName: 'Product1',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 2,
				producerName: 'Garden Farms',
				productName: 'Product2',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 3,
				producerName: 'Garden Farms',
				productName: 'Product3',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 4,
				producerName: 'Garden Farms',
				productName: 'Product4',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 5,
				producerName: 'Garden Farms',
				productName: 'Product5',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, {
				id: 6,
				productName: 'Product6',
				producerName: 'Garden Farms',
				image: '/images/product.jpg',
				price: 'XX.xx',
				unit: 'unit',
				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		]
	});
};

/* GET about page */
module.exports.about = function (req, res, next) {
	res.render('about');
};
