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
    }
}, { timestamps: true });

module.exports = caseCategory;