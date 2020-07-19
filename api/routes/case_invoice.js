const express = require('express');
const router = express.Router();

const CaseInvoiceController = require('../controllers/case_invoice');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', CaseInvoiceController.test);

module.exports = router;
