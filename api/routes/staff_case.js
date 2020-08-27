const express = require('express');
const router = express.Router();

const StaffCaseController = require('../controllers/staff_case');

router.get('/test', StaffCaseController.test);

module.exports = router;
