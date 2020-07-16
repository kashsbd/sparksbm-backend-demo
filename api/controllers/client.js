const client = require('../models/client');

exports.test = async (req, res) => {
    try {
        const clients = await client.findAll();
        return res.status(200).send(clients);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


