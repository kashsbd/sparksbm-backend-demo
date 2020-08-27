const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseTable = require('../models/case');
const staff = require('../models/staff');

const task = db.define('tbl_task', {
    task_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    task_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed_by: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notify_via_email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    is_recurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    recurring_type: {
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

caseTable.hasOne(task, { foreignKey: 'case_id' });
staff.hasOne(task, { foreignKey: 'assigned_by' });
staff.hasOne(task, { foreignKey: 'assigned_to' });
staff.hasOne(task, { foreignKey: 'notify_user_to' });


module.exports = task;