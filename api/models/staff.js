const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = db.define('tbl_staff', {
    staff_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.INTEGER,
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
    global_hourly_rate: {
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

module.exports = staff;