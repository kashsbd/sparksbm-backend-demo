const express = require('express');
const router = express.Router();

const CaseController = require('../controllers/case');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', CaseController.test);

module.exports = router;
