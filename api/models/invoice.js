const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const invoice = db.define('tbl_invoice', {
    invoice_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    invoice_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoice_type: {
        type: DataTypes.ENUM('UNPAID', 'PAID'),
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    due: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    over_due: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_final: {
        type: DataTypes.BOOLEAN,
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
}, { timestamps: false, underscored: true, });

module.exports = invoice;