const express = require('express');
const router = express.Router();

const EventController = require('../controllers/event');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', EventController.test);

module.exports = router;
