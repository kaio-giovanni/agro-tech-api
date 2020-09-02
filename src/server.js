const server = require('./app');

require('dotenv/config');
require('./database/connection');

const APP_PORT = process.env.PORT;

server.listen(APP_PORT, function() {
    console.log(`Server started on port ${APP_PORT}`);
});
