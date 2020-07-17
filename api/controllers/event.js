const event = require('../models/event');

exports.test = async (req, res) => {
    try {
        const events = await event.findAll();
        return res.status(200).send(events);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


