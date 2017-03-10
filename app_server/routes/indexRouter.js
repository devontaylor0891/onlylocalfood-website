var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.landing);

/* GET search page. */
router.get('/search', ctrlIndex.search);

/* GET about page. */
router.get('/about', ctrlIndex.about);

module.exports = router;
