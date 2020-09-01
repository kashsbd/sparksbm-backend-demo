const express = require('express');
const router = express.Router();

const PersonTypeController = require('../controllers/person_type_client');

router.get('/test', PersonTypeController.test);

module.exports = router;
