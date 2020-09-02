const Harvest = require('../models/Harvest');

class HarvestController {

    async create(req, res, next){
        const { cod, dt_start, dt_end, mill_id } = req.body;

        if (!cod)
            return res.send({ error: "Code was not informed" });
        else if (!dt_start)
            return res.send({ error: "Start date was not informed" });
        else if(!dt_end)
            return res.send({ error: "End date was not informed" });
        else if(!mill_id)
            return res.send({ error: "It is necessary to inform the mill (Moinho)" });

        try{
            const harvest = await Harvest.create({ cod, dt_start, dt_end, mill_id });

            return res.status(200).send(harvest);
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
}

module.exports = new HarvestController();