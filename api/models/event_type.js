const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const eventType = db.define('tbl_event_type', {
    event_type_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    event_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });

module.exports = eventType;