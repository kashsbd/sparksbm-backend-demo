const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = require('../models/staff');
const caseTable = require('../models/case');

const staffCase = db.define('tbl_staffs_case', {
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, { timestamps: true, underscored: true, });

staff.hasOne(staffCase, { foreignKey: 'staff_sid' });
caseTable.hasOne(staffCase, { foreignKey: 'case_sid' });

module.exports = staffCase;