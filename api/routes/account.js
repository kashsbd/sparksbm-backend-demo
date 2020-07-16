const express = require('express');
const router = express.Router();

const AccountController = require('../controllers/account');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', AccountController.test);

module.exports = router;
