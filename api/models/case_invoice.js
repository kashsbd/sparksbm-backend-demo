const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseTable = require('../models/case');
const invoice = require('../models/invoice');

const caseInvoice = db.define('tbl_cases_invoice', {
    case_invoice_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    case_invoice_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
}, { timestamps: true,underscored : true, });

caseTable.hasOne(caseInvoice, { foreignKey: 'case_sid' });
invoice.hasOne(caseInvoice, { foreignKey: 'invoice_sid' });

module.exports = caseInvoice;