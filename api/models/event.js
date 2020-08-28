const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseTable = require('../models/case');
const eventType = require('../models/event_type');
const staff = require('../models/staff');

const event = db.define('tbl_event', {
    event_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    invitees: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
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

caseTable.hasOne(event, { foreignKey: 'case_sid' });
eventType.hasOne(event, { foreignKey: 'event_type_sid' });
staff.hasOne(event, { foreignKey: 'primary_resp_sid' });
staff.hasOne(event, { foreignKey: 'secondary_resp_sid' });

module.exports = event;