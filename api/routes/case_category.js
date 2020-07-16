const express = require('express');
const router = express.Router();

const CaseCategoryController = require('../controllers/case_category');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', CaseCategoryController.test);

module.exports = router;
