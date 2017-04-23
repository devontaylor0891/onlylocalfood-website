
/* GET dashboard page */
module.exports.dashboard = function (req, res, next) {
	res.render('dashboard')
};

/* GET consumer dashboard page */
module.exports.dashboardConsumer = function (req, res, next) {
	res.render('dashboard-consumer', {
		userId: 1,
		firstName: 'Devon',
		userEmail: 'devon@email.com',
		creationDate: 'Jan 1, 2017',
		userType: 'consumer',
		orders: [
			{
				orderID: 123456,
				orderStatus: 'pending',
				producerId: 2,
				producerName: 'Garden Farms',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					deliveryFee: '10',
					deliveryFeeWaiver: '45'
				}
			}, {
				orderID: 333333,
				orderStatus: 'accepted',
				producerId: 2,
				producerName: 'Garden Farms',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					deliveryFee: '10',
					deliveryFeeWaiver: '45'
				}
			}, {
				orderID: 232323,
				orderStatus: 'completde',
				producerId: 2,
				producerName: 'Garden Farms',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					deliveryFee: '10',
					deliveryFeeWaiver: '45'
				}
			}
		]

	})
};

/* GET producer dashboard page */
module.exports.dashboardProducer = function (req, res, next) {
	res.render('dashboard-producer', {
		userId: 1,
		firstName: 'Devon',
		userEmail: 'devon@email.com',
		producerName: 'Garden Farms',
		producerLocation: 'Moosomin',
		creationDate: 'Jan 1, 2017',
		userType: 'consumer',
		orders: [
			{
				orderId: 123456,
				orderStatus: 'pending',
				userId: 2,
				firstName: 'Bob',
				deliveryAddress: '123 Main St.',
				consumerComments: 'These are comments added to the cart by the consumer.',
				producerComments: '',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 10,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					deliveryFee: '10',
					deliveryFeeWaiver: '45'
				}
			}, {
				orderID: 333333,
				orderStatus: 'accepted',
				userId: 2,
				firstName: 'Bob',
				deliveryAddress: '123 Main St.',
				consumerComments: 'These are comments added to the cart by the consumer.',
				producerComments: '',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					deliveryFee: '10',
					deliveryFeeWaiver: '45'
				}
			}, {
				orderID: 232323,
				orderStatus: 'completde',
				userId: 2,
				firstName: 'Bob',
				deliveryAddress: '',
				consumerComments: 'These are comments added to the cart by the consumer.',
				producerComments: '',
				orderProducts: [
					{
						orderQty: 2,
						productId: 1,
						productName: 'Product1',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 2,
						productName: 'Product2',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 3,
						productId: 3,
						productName: 'Product3',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 6,
						productId: 4,
						productName: 'Product4',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 2,
						productId: 5,
						productName: 'Product5',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}, {
						orderQty: 1,
						productId: 6,
						productName: 'Product6',
						productImage: '/images/product.jpg',
						productPrice: 9.99,
						productUnit: 'lb',
						productUnitsPer: 1,
						productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						productCategory: 'Meat',
						productSubcategory: 'Beef',
						qtyAvailable: '15',
						qtyPending: '3',
						qtySold: '55'
					}
				],
				schedule: {
					schedulesId: 1,
					schedulesType: 'Door-to-door Delivery',
					schedulesDate: 'July 3',
					schedulesLocation: 'Moosomin',
					startTime: '12 pm',
					endTime: '2 pm',
					schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
					DeliveryFee: '10',
					DeliveryFeeWaiver: '45'
				}
			}
		],
		categories: [
		    {
		        categoryId: '1',
		        category: 'Meat',
		        subcategory: 'Beef'
		    },
		    {
		        categoryId: '2',
		        category: 'Meat',
		        subcategory: 'Pork'
		    },
		    {
		        categoryId: '3',
		        category: 'Produce',
		        subcategory: 'Carrots'
		    },
		    {
		        categoryId: '4',
		        category: 'Produce',
		        subcategory: 'Potatoes'
		    }
		],
		producerProducts: [
			{
				productId: 1,
				productName: 'Product1',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}, {
				productId: 2,
				productName: 'Product2',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}, {
				productId: 3,
				productName: 'Product3',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}, {
				productId: 4,
				productName: 'Product4',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}, {
				productId: 5,
				productName: 'Product5',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}, {
				productId: 6,
				productName: 'Product6',
				productImage: '/images/product.jpg',
				productPrice: 10,
				productUnit: 'lb',
				productUnitsPer: 1,
				productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				qtyAvailable: '15',
				qtyPending: '3',
				qtySold: '55'
			}
		],
		schedules: [
			{
				schedulesId: 1,
				schedulesType: 'Door-to-door Delivery',
				schedulesDate: 'July 3',
				schedulesLocation: 'Moosomin',
				startTime: '12 pm',
				endTime: '2 pm',
				schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
				deliveryFee: '10',
				deliveryFeeWaiver: '45'
			}, {
				schedulesId: 2,
				schedulesType: 'Off-farm Pickup',
				schedulesDate: 'July 5',
				schedulesLocation: 'Wapella',
				startTime: '12 pm',
				endTime: '2 pm',
				schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
				deliveryFee: null,
				deliveryFeeWaiver: null
			}
		]
	})
};