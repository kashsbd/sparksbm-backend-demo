const express = require('express');
const router = express.Router();

const ExpenseTypeController = require('../controllers/expense_type');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', ExpenseTypeController.test);

module.exports = router;
