var express = require('express');
var router = express.Router();
var ctrlDash = require('../controllers/dashboard');

/* GET dashboard page. */
router.get('/', ctrlDash.dashboard);

/* GET consumer dashboard page. */
router.get('/consumer', ctrlDash.dashboardConsumer);

/* GET producerdashboard page. */
router.get('/producer', ctrlDash.dashboardProducer);

module.exports = router;
