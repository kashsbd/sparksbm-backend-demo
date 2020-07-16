const caseCategory = require('../models/case_category');

exports.test = async (req, res) => {
    try {
        const case_categories = await caseCategory.findAll();
        return res.status(200).send(case_categories);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


