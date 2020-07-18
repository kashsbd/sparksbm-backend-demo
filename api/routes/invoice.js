const express = require('express');
const router = express.Router();

const InvoiceController = require('../controllers/invoice');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', InvoiceController.test);

module.exports = router;
