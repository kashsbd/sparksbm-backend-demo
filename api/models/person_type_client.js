const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

const staff = require('../models/staff');
const client = require('../models/client');

const personTypeClient = db.define('tbl_person_type_client', {
    person_type_sid: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    person_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_card_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_card_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    salutation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
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

staff.hasOne(personTypeClient, { foreignKey: 'referred_by' });
// client.hasOne(personTypeClient, { foreignKey: 'client_sid' });

module.exports = personTypeClient;