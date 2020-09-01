const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    return res.status(200).send({
        message: "Cyan agro"
    });
});

module.exports = routes;