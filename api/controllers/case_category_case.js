const caseCategoryCase = require('../models/case_category_case');

exports.test = async (req, res) => {
    try {
        const all_case_category_case = await caseCategoryCase.findAll();
        return res.status(200).send(all_case_category_case);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


