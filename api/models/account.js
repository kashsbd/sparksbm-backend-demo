const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const account = db.define('tbl_account', {
    account_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
    }
}, { timestamps: true });

module.exports = account;