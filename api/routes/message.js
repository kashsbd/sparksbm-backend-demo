const express = require('express');
const router = express.Router();

const MessageController = require('../controllers/message');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', MessageController.test);

module.exports = router;
