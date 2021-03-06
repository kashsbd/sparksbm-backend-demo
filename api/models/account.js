const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const client = require('../models/client');

const account = db.define('tbl_account', {
    account_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bank_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    starting_money: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    created_by: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updated_by: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, { timestamps: true, underscored: true, });

client.hasOne(account, { foreignKey: 'client_sid' });

module.exports = account;