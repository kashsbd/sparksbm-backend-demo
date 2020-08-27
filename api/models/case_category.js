const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseCategory = db.define('tbl_case_category', {
    category_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    category_name: {
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

module.exports = caseCategory;