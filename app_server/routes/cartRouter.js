var express = require('express');
var router = express.Router();
var ctrlCart = require('../controllers/cart');

/* GET cart page. */
router.get('/', ctrlCart.cart);

/* GET confirm page. */
router.get('/confirm', ctrlCart.confirm);

module.exports = router;
