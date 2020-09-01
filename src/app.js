const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const bpConfig = require('./config/bodyparser');

const app = express();

app.use(bodyParser.json(bpConfig.json));
app.use(bodyParser.urlencoded(bpConfig.urlencoded));
app.use(routes);

module.exports = app;