const Mill = require('../models/Mill');

class MillController {

    async create(req, res, next){
        const name = req.body.name;

        if (!name)
            return res.send({ error: "Name was not informed" });

        try{
            const mill = await Mill.create({ name });

            return res.status(200).send(mill);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async get(req, res, next){
        try{
            const mills = await Mill.findAll({
                include: {
                    association: "harvest"
                }
            });
    
            return res.status(200).send(mills);
        }catch(error){
            return res.status(406).send(error);
        }
    }

    async getById(req, res, next){
        const id = req.params.id;
        try{
            const mill = await Mill.findByPk(id, {
                include: {
                    association: "harvest"
                }
            });
    
            return res.status(200).send(mill);
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new MillController();

