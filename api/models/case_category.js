const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseCategory = db.define('tbl_cases_category', {
    category_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
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