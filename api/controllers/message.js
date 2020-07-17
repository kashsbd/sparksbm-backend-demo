const message = require('../models/message');

exports.test = async (req, res) => {
    try {
        const messages = await message.findAll();
        return res.status(200).send(messages);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


