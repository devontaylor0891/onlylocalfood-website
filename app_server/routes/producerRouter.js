var express = require('express');
var router = express.Router();
var ctrlProducer = require('../controllers/producer');

/* GET producer page. */
router.get('/', ctrlProducer.producer);

/* GET product page. */
router.get('/product', ctrlProducer.product);

/* GET individual product page. */
//router.get('/product/1', ctrlProducer.product.products);

/* GET schedule page. */
router.get('/schedule', ctrlProducer.schedule);

module.exports = router;
