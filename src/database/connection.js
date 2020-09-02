const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const modelDefiners = [
	require('../models/Mill'),
	require('../models/Harvest'),
	require('../models/Farm'),
	require('../models/Field'),
];

class Connection {

	static conn = null;

	/**
	 * Get connection database
	 */
	static getInstance(){
		if(Connection.conn === null || Connection.conn === undefined){
			Connection.conn = new Sequelize(dbConfig);
			Connection.assertDatabaseConnectionOk();
			Connection.initModels(modelDefiners);
			Connection.associateModels(modelDefiners);
		}
		return Connection.conn;
	}

	/**
	 * Checks the database connection
	 */
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

	/**
	 * Initializes models
	 * @param { Model } modelDefiners A list of models
	 */
	static initModels(modelDefiners){
		for (const modelDefiner of modelDefiners) {
			modelDefiner.init(Connection.conn);
		}
	}

	/**
	 * Defines model associations
	 * @param { Model } modelDefiners A list of models
	 */
	static associateModels(modelDefiners){
		for (const modelDefiner of modelDefiners) {
			modelDefiner.associate(Connection.conn.models);
		}
	}
}

module.exports = Connection.getInstance();