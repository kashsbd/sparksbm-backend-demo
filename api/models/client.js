const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const companyTypeClient = require('../models/company_type_client');
const personTypeClient = require('../models/person_type_client');

const client = db.define('tbl_client', {
    client_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // company details
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
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
    mobile: {
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
    // payment settings
    payment_term: {
        type: DataTypes.STRING,
        allowNull: false
    },
    billing_term: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearly_interest_rate: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    law_firm_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    leds_client_id: {
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

// personTypeClient.belongsTo(client);
// companyTypeClient.belongsTo(client);

module.exports = client;