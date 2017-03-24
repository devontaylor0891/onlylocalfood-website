var express = require('express');
var router = express.Router();
var ctrlDash = require('../controllers/dashboard');

/* GET dashboard page. */
router.get('/', ctrlDash.dashboard);


module.exports = router;
