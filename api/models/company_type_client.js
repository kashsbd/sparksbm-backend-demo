const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = require('../models/staff');
const client = require('../models/client');

const companyTypeClient = db.define('tbl_company_type_client', {
    company_type_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    company_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salutation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    business_registration_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tax_registered: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    notes: {
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

staff.hasOne(companyTypeClient, { foreignKey: 'referred_by' });
client.hasOne(companyTypeClient, { foreignKey: 'client_sid' });

module.exports = companyTypeClient;