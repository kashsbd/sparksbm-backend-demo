const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const client = require('../models/client');
const staff = require('../models/staff');
const caseCategory = require('../models/case_category');

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
    }
}, { timestamps: true });

client.hasOne(caseTable, { foreignKey: 'client_id' });
staff.hasOne(caseTable, { foreignKey: 'staff_id' });
caseCategory.hasOne(caseTable, { foreignKey: 'case_category_id' });

module.exports = caseTable;