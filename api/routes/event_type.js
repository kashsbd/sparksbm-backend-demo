const express = require('express');
const router = express.Router();

const EventTypeController = require('../controllers/event_type');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', EventTypeController.test);

module.exports = router;
