const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const modelDefiners = [
	require('../models/moinho'),
	require('../models/colheita'),
	require('../models/fazenda'),
	require('../models/campo'),
];

class Connection {

	static conn = null;

	static getInstance(){
		if(Connection.conn === null || Connection.conn === undefined){

			Connection.conn = new Sequelize(dbConfig);       // create DB connection
			Connection.assertDatabaseConnectionOk(); 		// check DB connection
			Connection.initModels(modelDefiners); 		   // initializes the models
		}
		return Connection.conn;
	}

	static async assertDatabaseConnectionOk() {
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

	static initModels(modelDefiners){
		for (const modelDefiner of modelDefiners) {
			modelDefiner.init(Connection.conn);
		}
	}
}

module.exports = Connection.getInstance();