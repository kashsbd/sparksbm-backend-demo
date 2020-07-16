const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const address = require('../models/address');

const vendor = db.define('tbl_vendor', {
    vendor_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    // company details
    contact_person: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fax: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, { timestamps: true });

address.hasOne(vendor);

module.exports = vendor;