const account = require('../models/account');

exports.test = async (req, res) => {
    try {
        const accounts = await account.findAll();
        return res.status(200).send(accounts);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


