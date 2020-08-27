const staffCase = require('../models/staff_case');

exports.test = async (req, res) => {
    try {
        const all_staff_cases = await staffCase.findAll();
        return res.status(200).send(all_staff_cases);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


