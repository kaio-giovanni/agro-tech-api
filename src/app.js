const express = require('express');
// instantiating express
const app = express();
// create http server
const server = require('http').createServer(app);
// create web socket
const io = require('socket.io')(server);
// passing web socket to routes
const routes = require('./routes')(io);
// config body-parser
const bodyParser = require('body-parser');
const bpConfig = require('./config/bodyparser');
// config cors
const cors = require('cors');
const corsConfig = require('./config/cors');

// config middlewares
app.use(cors(corsConfig));
app.use(bodyParser.json(bpConfig.json));
app.use(bodyParser.urlencoded(bpConfig.urlencoded));
app.use(routes);

module.exports = server;