const companyTypeClient = require('../models/company_type_client');

exports.test = async (req, res) => {
    try {
        const company_type_clients = await companyTypeClient.findAll();
        return res.status(200).send(company_type_clients);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


