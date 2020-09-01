const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = require('../models/staff');

const message = db.define('tbl_message', {
    message_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    message_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message_type: {
        type: DataTypes.ENUM('INCOMING', 'OUTGOING'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    message: {
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

staff.hasOne(message, { foreignKey: 'staff_sid' });

module.exports = message;