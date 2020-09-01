const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const account = require('../models/account');

const expenseType = db.define('tbl_expense_type', {
    expense_type_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    expense_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expense_type_name: {
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

account.hasOne(expenseType, { foreignKey: 'account_sid' });

module.exports = expenseType;