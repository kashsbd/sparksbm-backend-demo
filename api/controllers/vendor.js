const vendors = require('../models/vendor');

exports.test = async (req, res) => {
    try {
        const vendors = await vendors.findAll();
        return res.status(200).send(vendors);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


