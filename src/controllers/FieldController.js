const Field = require('../models/Field');
const Farm = require('../models/Farm');

class FieldController {

    async create(req, res, next){
        const { cod, latitude, longitude, farm_id } = req.body;

        if (!cod)
            return res.status(400).send({ error: "Code was not informed" });
        else if (!latitude || !longitude)
            return res.status(400).send({ error: "Location was not informed" });
        else if (!farm_id)
            return res.status(400).send({ error: "It is necessary to inform the farm (Fazenda)" });

        try{
            const farm = await Farm.findByPk(farm_id);
            if(!farm)
                return res.status(401).send({ error: "Farm not found!" })

            const field = await Field.create({ cod, latitude, longitude, farm_id });
            req.socket = field;
            next();
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

    async del(req, res, next){
        const id = req.params.id;
        try{
            const field = await Field.findByPk(id);
            if(!field)
                return res.status(401).send({ error: "Field not found!" });

            await field.destroy();
            return res.status(200).send({ message: "success" });
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new FieldController();