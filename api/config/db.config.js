const Sequelize = require("sequelize");
const { MYSQL_PATH } = require('./config');

const db = new Sequelize(MYSQL_PATH, {
    dialect: "mysql",
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
});

module.exports = { db };