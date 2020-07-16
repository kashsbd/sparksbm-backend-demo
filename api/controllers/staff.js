const jwt = require('jsonwebtoken');

const { JWT_KEY } = require('../config/config');

const staff = require('../models/staff');

exports.test = async (req, res) => {
	try {
		const users = await staff.findAll();
		return res.status(200).send(users);
	} catch (error) {
		return res.status(500).json({ error });
	}
};


