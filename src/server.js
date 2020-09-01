const app = require('./app');
require('dotenv/config');

const APP_PORT = process.env.PORT;

const server = app.listen(APP_PORT, function() {
    console.log(`Server started on port ${APP_PORT}`);
});