const caseTable = require('../models/case');

exports.test = async (req, res) => {
    try {
        const all_cases = await caseTable.findAll();
        return res.status(200).send(all_cases);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


