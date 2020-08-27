const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseCategory = require('../models/case_category');
const caseTable = require('../models/case');

const caseCategoryCase = db.define('tbl_case_categories_case', {
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, { timestamps: true, underscored: true, });

caseCategory.hasOne(caseCategoryCase, { foreignKey: 'category_id' });
caseTable.hasOne(caseCategoryCase, { foreignKey: 'case_id' });

module.exports = caseCategoryCase;