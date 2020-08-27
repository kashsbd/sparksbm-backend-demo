const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const client = require('../models/client');

const address = db.define('tbl_address', {
    address_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM("POSTAL", "BILLING"),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
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

client.hasOne(address, { foreignKey: 'client_id' });

module.exports = address;