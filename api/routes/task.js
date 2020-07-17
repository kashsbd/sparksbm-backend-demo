const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task');
const checkAuth = require('../middlewares/check-auth');

router.get('/test', TaskController.test);

module.exports = router;
