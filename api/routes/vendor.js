const express = require('express');
const router = express.Router();

const VendorController = require('../controllers/vendor');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', VendorController.test);

module.exports = router;
