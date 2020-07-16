const os = require('os');

const MYSQL_PATH = 'mysql://kash:wakeup@localhost:3306/db_sparksbm';

const JWT_KEY = 'secure_sparksbm_key';

module.exports = {
	MYSQL_PATH,
	JWT_KEY,
};
