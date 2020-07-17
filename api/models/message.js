const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = require('../models/staff');

const message = db.define('tbl_message', {
    message_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

staff.hasOne(message, { foreignKey: 'staff_id' });

module.exports = message;