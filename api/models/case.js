const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const client = require('../models/client');

const caseTable = db.define('tbl_case', {
    case_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    case_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    case_ref: {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    court_case_no: {
        type: DataTypes.STRING,
        allowNull: true
    },
    client_matter_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
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

client.hasOne(caseTable, { foreignKey: 'client_id' });

module.exports = caseTable;