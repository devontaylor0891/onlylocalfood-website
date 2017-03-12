var express = require('express');
var router = express.Router();
var ctrlProducer = require('../controllers/producer');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

/* GET producer page. */
router.get('/', ctrlProducer.producer);

/* GET product page. */
router.get('/product', ctrlProducer.product);

/* GET individual product page. */
router.route('/:id')
.get(function (req, res, next) {
	res.end('This will return with a producer id: ' + req.params.id);
});

/* GET schedule page. */
router.get('/schedule', ctrlProducer.schedule);

module.exports = router;
