const { Router } = require('express');
const routes = Router();

const millController    = require('./controllers/MillController');
const harvestController = require('./controllers/HarvestController');
const farmController    = require('./controllers/FarmController');
const fieldController   = require('./controllers/FieldController');

module.exports = (socketio) => {

    socketio.on('connection', (socket) => {
        console.log(socket.id + " Connected on the server");

        socket.on('disconnect', () => {
            console.log(socket.id + " Disconnected");
        });
    });

    routes.get('/', (req, res) => {
        res.send("Challenge CYAN");
    });

    routes.post('/register/mill/', millController.create, (req, res) => {
        const mill = req.socket;
        socketio.emit('new mill', mill);
        return res.status(200).send(mill);
    });
    routes.get('/mill/', millController.get);
    routes.get('/mill/:id/', millController.getById);

    routes.post('/register/harvest/', harvestController.create, (req, res) => {
        const harvest = req.socket;
        socketio.emit('new harvest', harvest);
        return res.status(200).send(harvest);
    });
    routes.get('/harvest/', harvestController.get);
    routes.get('/harvest/:id/', harvestController.getById);

    routes.post('/register/farm/', farmController.create, (req, res) => {
        const farm = req.socket;
        socketio.emit('new farm', farm);
        return res.status(200).send(farm);
    });
    routes.get('/farm/', farmController.get);
    routes.get('/farm/:id/', farmController.getById);

    routes.post('/register/field/', fieldController.create, (req, res) => {
        const field = req.socket;
        socketio.emit('new field', field);
        return res.status(200).send(field);
    });
    routes.get('/field/', fieldController.get);
    routes.get('/field/:id/', fieldController.getById);
    
    return routes;
}