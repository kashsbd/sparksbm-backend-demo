const caseInvoice = require('../models/case_invoice');

exports.test = async (req, res) => {
    try {
        const caseInvoices = await caseInvoice.findAll();
        return res.status(200).send(caseInvoices);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


