const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const eventType = db.define('tbl_event_type', {
    event_type_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    event_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    event_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, { timestamps: true, underscored: true, });

module.exports = eventType;