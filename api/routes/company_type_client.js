const express = require('express');
const router = express.Router();

const CompanyTypeController = require('../controllers/company_type_client');

router.get('/test', CompanyTypeController.test);

module.exports = router;
