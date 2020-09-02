const Field = require('../models/Field');

class FieldController {

    async create(req, res, next){
        const { cod, latitude, longitude, farm_id } = req.body;

        if (!cod)
            return res.send({ error: "Code was not informed" });
        else if (!latitude || !longitude)
            return res.send({ error: "Location was not informed" });
        else if (!farm_id)
            return res.send({ error: "It is necessary to inform the farm (Fazenda)" });

        try{
            const field = await Field.create({ cod, latitude, longitude, farm_id });

            return res.status(200).send(field);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async get(req, res, next){
        try{
            const fields = await Field.findAll();

            return res.status(200).send(fields);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async getById(req, res, next){
        const id = req.params.id;
        try{
            const field = await Field.findByPk(id);

            return res.status(200).send(field);
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new FieldController();