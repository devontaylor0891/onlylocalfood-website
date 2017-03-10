var express = require('express');
var router = express.Router();
var ctrlCart = require('../controllers/cart');

/* GET cart page. */
router.get('/', ctrlCart.cart);

module.exports = router;
