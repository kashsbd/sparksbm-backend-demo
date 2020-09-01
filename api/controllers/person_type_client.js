const personTypeClient = require('../models/person_type_client');

exports.test = async (req, res) => {
    try {
        const person_type_clients = await personTypeClient.findAll();
        return res.status(200).send(person_type_clients);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


