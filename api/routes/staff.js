const express = require('express');
const router = express.Router();

const StaffController = require('../controllers/staff');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', StaffController.test);

module.exports = router;
