const { Router } = require('express');
const routes = Router();

const millController    = require('./controllers/MillController');
const harvestController = require('./controllers/HarvestController');
const farmController    = require('./controllers/FarmController');
const fieldController   = require('./controllers/FieldController');

module.exports = (socketio) => {

    socketio.on('connection', (socket) => {
        console.log(socket);
    });

    routes.get('/', (req, res) => {
        res.send("Hello world");
    });

    routes.post('/register/mill/', millController.create);
    routes.get('/mill/', millController.get);
    routes.get('/mill/:id/', millController.getById);

    routes.post('/register/harvest/', harvestController.create);
    routes.get('/harvest/', harvestController.get);
    routes.get('/harvest/:id/', harvestController.getById);

    routes.post('/register/farm/', farmController.create);
    routes.get('/farm/', farmController.get);
    routes.get('/farm/:id/', farmController.getById);

    routes.post('/register/field/', fieldController.create);
    routes.get('/field/', fieldController.get);
    routes.get('/field/:id/', fieldController.getById);
    
    return routes;
}