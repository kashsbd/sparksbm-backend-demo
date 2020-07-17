const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const expenseType = db.define('tbl_expense_type', {
    expense_type_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    expense_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });

module.exports = expenseType;