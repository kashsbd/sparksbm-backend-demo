const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const address = require('../models/address');

const vendor = db.define('tbl_vendor', {
    vendor_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    vendor_id: {
        type: DataTypes.INTEGER,
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

address.hasOne(vendor, { foreignKey: 'address_sid' });

module.exports = vendor;