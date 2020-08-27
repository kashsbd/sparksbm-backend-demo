const express = require('express');
const router = express.Router();

const CaseCategoryCaseController = require('../controllers/case_category_case');

router.get('/test', CaseCategoryCaseController.test);

module.exports = router;
