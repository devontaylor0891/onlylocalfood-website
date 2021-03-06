
/* GET cart page */
module.exports.cart = function (req, res) {
	res.render('cart', {
		userId: 12345,
		producerId: 123456,
		producerName: 'Garden Farms1',
		orderProducts: [
		  {
			productId: 1,
			productName: 'Product1',
			productImage: '/images/product.jpg',
			productPrice: '4.99',
			productUnit: 'lb',
			productUnitsPer: '1',
		  }, {
			productId: 2,
			productName: 'Product2',
			productImage: '/images/product.jpg',
			productPrice: 'XX.xx',
			productUnit: 'unit',
			productUnitsPer: '1'
		  }, {
			productId: 3,
			productName: 'Product3',
			productImage: '/images/product.jpg',
			productPrice: 'XX.xx',
			productUnit: 'unit',
			productUnitsPer: '1'
		  }, {
			productId: 4,
			productName: 'Product4',
			productImage: '/images/product.jpg',
			productPrice: 'XX.xx',
			productUnit: 'unit',
			productUnitsPer: '1'
		  }, {
			productId: 5,
			productName: 'Product5',
			productImage: '/images/product.jpg',
			productPrice: 'XX.xx',
			productUnit: 'unit',
			productUnitsPer: '1'
		  }, {
			productId: 6,
			productName: 'Product6',
			productImage: '/images/product.jpg',
			productPrice: 'XX.xx',
			productUnit: 'unit',
			productUnitsPer: '1'
		  }
		],
		producerSchedule: [
		  {
			scheduleId: 1,
			scheduleType: 'Door-to-door Delivery',
			scheduleDate: 'July 3',
			scheduleLocation: 'Moosomin',
			startTime: '12 pm',
			endTime: '2 pm',
			scheduleDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
			scheduleFee: 10,
			scheduleFeeWaiver: 45
		  }, {
			scheduleId: 2,
			scheduleType: 'Off-farm Pickup',
			scheduleDate: 'July 5',
			scheduleLocation: 'Moosomin',
			startTime: '12 pm',
			endTime: '2 pm',
			scheduleDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
			scheduleFee: null,
			scheduleFeeWaiver: null
		  }
		]
	});
};

/* GET confirm page */
module.exports.confirm = function (req, res) {
	res.render('confirm');
};