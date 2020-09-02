const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const routes = require('./routes')(io);
const bodyParser = require('body-parser');
const bpConfig = require('./config/bodyparser');

app.use(bodyParser.json(bpConfig.json));
app.use(bodyParser.urlencoded(bpConfig.urlencoded));
app.use(routes);

module.exports = server;