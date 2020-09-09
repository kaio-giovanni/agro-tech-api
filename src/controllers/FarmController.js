const Farm = require('../models/Farm');
const Harvest = require('../models/Harvest');

class FarmController {

    async create(req, res, next){
        const { cod, name, harvest_id } = req.body;

        if (!cod)
            return res.status(400).send({ error: "Code was not informed" });
        else if (!name)
            return res.status(400).send({ error: "Name was not informed" });
        else if (!harvest_id)
            return res.status(400).send({ error: "It is necessary to inform the harvest (Colheita)" });

        try {
            const harvest = await Harvest.findByPk(harvest_id);
            if(!harvest)
                return res.status(401).send({ error: "Harvest not found!" });

            const farm = await Farm.create({ cod, name, harvest_id });
            req.socket = farm;
            next();
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async get(req, res, next){
        try{
            const farms = await Farm.findAll({
                include: {
                    association: "field"
                }
            });
    
            return res.status(200).send(farms);
        }catch(error){
            return res.status(406).send(error);
        }   
    }

    async getById(req, res, next){
        const id = req.params.id;
        try{
            const farm = await Farm.findByPk(id, {
                include: {
                    association: "field"
                }
            });
    
            return res.status(200).send(farm);
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new FarmController();

