const eventType = require('../models/event_type');

exports.test = async (req, res) => {
    try {
        const eventTypes = await eventType.findAll();
        return res.status(200).send(eventTypes);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


