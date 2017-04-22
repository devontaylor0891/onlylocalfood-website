/* GET landing page. */
module.exports.landing = function (req, res, next) {
	res.render('landing');
};

/* GET search page */
module.exports.search = function (req, res, next) {
	res.render('search', {
		products: [
			{
				productId: 1,
				productName: 'Product1',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				producerName: 'Garden Farms'
			}, {
				productId: 2,
				productName: 'Product2',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Pork',
				producerName: 'Somemore Farms'
			}, {
				productId: 3,
				productName: 'Product3',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Chicken',
				producerName: 'Other Farms'
			}, {
				productId: 4,
				productName: 'Product4',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Produce',
				productSubcategory: 'Potatoes',
				producerName: 'Garden Farms'
			}, {
				productId: 5,
				productName: 'Product5',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Produce',
				productSubcategory: 'Carrots',
				producerName: 'Someother Farms'
			}, {
				productId: 6,
				productName: 'Product6',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Dairy',
				productSubcategory: 'Cheese',
				producerName: 'Other Farms'
			}
		]
	});
};

/* GET about page */
module.exports.about = function (req, res, next) {
	res.render('about');
};
