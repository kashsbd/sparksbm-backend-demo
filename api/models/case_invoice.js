const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseTable = require('../models/case');
const invoice = require('../models/invoice');

const caseInvoice = db.define('tbl_case_invoice', {
    case_invoice_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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

caseTable.hasOne(caseInvoice, { foreignKey: 'case_id' });
invoice.hasOne(caseInvoice, { foreignKey: 'invoice_id' });

module.exports = caseInvoice;