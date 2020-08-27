const address = require('../models/address');

exports.test = async (req, res) => {
    try {
        const all_address = await address.findAll();
        return res.status(200).send(all_address);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


