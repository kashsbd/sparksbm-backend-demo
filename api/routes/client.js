const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/client');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', ClientController.test);

module.exports = router;
