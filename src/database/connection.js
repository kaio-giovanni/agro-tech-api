const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const modelDefiners = [
	//require('./models/user.model'),
	//require('./models/instrument.model'),
	//require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),
];

class Connection {

	static conn = null;

	static getInstance(){
		if(Connection.conn === null || Connection.conn === undefined){
			Connection.conn = new Sequelize(dbConfig);
			assertDatabaseConnectionOk();
			initModels(modelDefiners);
		}
		return Connection.conn;
	}

	async assertDatabaseConnectionOk() {
		console.log(`Checking database connection...`);
		try {
			await Connection.conn.authenticate();
			console.log('Database connection OK!');
		} catch (error) {
			console.error('Unable to connect to the database:');
			console.error(error.message);
			process.exit(1);
		}
	}

	initModels(modelDefiners){
		for (const modelDefiner of modelDefiners) {
			modelDefiner.init(sequelize);
		}
	}
}

module.exports = Connection.getInstance();