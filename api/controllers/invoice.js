const invoice = require('../models/invoice');

exports.test = async (req, res) => {
    try {
        const invoices = await invoice.findAll();
        return res.status(200).send(invoices);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


