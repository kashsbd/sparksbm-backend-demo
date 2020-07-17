const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const caseTable = require('../models/case');
const eventType = require('../models/event_type');
const staff = require('../models/staff');

const event = db.define('tbl_event', {
    event_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
}, { timestamps: false });

caseTable.hasOne(event,{ foreignKey: 'case_id' });
eventType.hasOne(event,{ foreignKey: 'event_type_id' });
staff.hasOne(event, { foreignKey: 'primary_resp_id' });
staff.hasOne(event, { foreignKey: 'secondary_resp_id' });

module.exports = event;