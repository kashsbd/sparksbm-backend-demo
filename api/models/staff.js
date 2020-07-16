const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = db.define('tbl_staff', {
    staff_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    staff_role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    staff_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    initial: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    gbl_hr_rate: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    auto_assign_new_case: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    last_login: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, { timestamps: true });

module.exports = staff;