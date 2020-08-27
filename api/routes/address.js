const express = require('express');
const router = express.Router();

const AddressController = require('../controllers/address');

router.get('/test', AddressController.test);

module.exports = router;
