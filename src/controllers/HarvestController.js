const Harvest = require('../models/Harvest');
const Mill = require('../models/Mill');

class HarvestController {

    async create(req, res, next){
        const { cod, dt_start, dt_end, mill_id } = req.body;

        if (!cod)
            return res.status(400).send({ error: "Code was not informed" });
        else if (!dt_start)
            return res.status(400).send({ error: "Start date was not informed" });
        else if(!dt_end)
            return res.status(400).send({ error: "End date was not informed" });
        else if(!mill_id)
            return res.status(400).send({ error: "It is necessary to inform the mill (Moinho)" });

        try{
            const mill = await Mill.findByPk(mill_id);
            if(!mill)
                return res.status(401).send({ error: "Mill not found!" });

            const harvest = await Harvest.create({ cod, dt_start, dt_end, mill_id });
            req.socket = harvest;
            next();
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async get(req, res, next){
        try{
            const harvests = await Harvest.findAll({
                include: [
                    {
                        association: "farm"
                    }
                ]
            });
    
            return res.status(200).send(harvests);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async getById(req, res, next){
        const id = req.params.id;
        try{
            const harvest = await Harvest.findByPk(id, {
                include: {
                    association: "farm"
                }
            });
    
            return res.status(200).send(harvest);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async del(req, res, next){
        const id = req.params.id;
        try{
            const harvest = await Harvest.findByPk(id);
            if(!harvest)
                return res.status(401).send({ error: "Harvest not found!" });

            await harvest.destroy();
            return res.status(200).send({ message: "success" });
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new HarvestController();