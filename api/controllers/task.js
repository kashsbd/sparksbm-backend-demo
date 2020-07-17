const task = require('../models/task');

exports.test = async (req, res) => {
    try {
        const tasks = await task.findAll();
        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(500).json({ error });
    }
};


