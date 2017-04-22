var request = require('request-promise');
var Promise = require('bluebird');

/* GET product page */
module.exports.product = function (req, res, next) {
	res.render('product', {
		productId: 1,
		productName: 'Product1',
		productImage: '/images/product.jpg',
		productPrice: '9.99',
		productUnit: 'lb',
		productUnitsPer: 1,
		productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		producerName: 'Garden Farms',
		producerLocation: 'Moosomin',
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
			    schedulesLocation: 'Moosomin',
			    startTime: '12 pm',
			    endTime: '2 pm',
			    schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
			  	deliveryFee: null,
			  	deliveryFeeWaiver: null
			}
		]
	});
};

/* GET producer page */

module.exports.producer = function (req, res, next) {

//FOR NOW (moving the data out of the views and into the controllers) WE WILL ACCESS DATA THAT SHOULD LOOK LIKE THIS: 

	res.render('producer', {
		producerId: '123456',
		producerName: 'Garden Farms1',
		producerLogo: '/images/product.jpg',
		producerLocation: 'Moosomin',
		producerEmail: 'garden@farms.com',
		producerDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		producerProducts: [
		  {
			productId: 1,
			productName: 'Product1',
			productImage: '/images/product.jpg',
			productPrice: '4.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55',
			productStatus: 'active'
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
	
	
/*
*********** THIS IS HOW WE WILL GET THE INFO FROM THE DB ************
	// array of requests
	var requests = [{
    method: 'GET',
    json: true,
    uri: 'http://onlylocalfoods-api.39mpginjms.us-west-2.elasticbeanstalk.com/api/users',
	}, {
    method: 'GET',
    json: true,
    uri: 'http://onlylocalfoods-api.39mpginjms.us-west-2.elasticbeanstalk.com/api/products',
	}];

	//send the requests and once they are all done, .then will execute
	Promise.map(requests, function(obj) {
	  return request(obj).then(function(body) {
	    return body;
	  });
	}).then(function(results) {
	  for (var i = 0; i < results.length; i++) {
	    // access the result's body via results[i]

			// I know it's in the 0 position cause thats where the request was
			var responseFromFirstRequest = results[0];
			res.render('producer', responseFromFirstRequest[req.params.id]);
	  }
	}, function(err) {
		console.log("error:!!", err);
	  // handle all your errors here
	});
*/


/*
	request(options)
    .then(function (body) {
	 	res.render('producer', body[req.params.id]);
    })
    .catch(function (err) {
      console.log(err);
    });
*/
};

/* GET schedule page */
module.exports.schedule = function (req, res, next) {
	res.render('schedule', {
		producerName: 'Garden Farms',
		schedules: [
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
