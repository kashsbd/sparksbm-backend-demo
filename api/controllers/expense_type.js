const expenseType = require('../models/expense_type');

exports.test = async (req, res) => {
    try {
        const expenseTypes = await expenseType.findAll();
        return res.status(200).send(expenseTypes);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


