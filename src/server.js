// http server
const server = require('./app');

// environment variables
require('dotenv/config');
// connect to database
require('./database/connection');
// application port
const APP_PORT = process.env.PORT;

server.listen(APP_PORT, function() {
    console.log(`Server started on port ${APP_PORT}`);
});
