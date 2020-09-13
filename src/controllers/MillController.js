const Mill = require('../models/Mill');

class MillController {

    async create(req, res, next){
        const name = req.body.name;

        if (!name)
            return res.status(400).send({ error: "Name was not informed" });

        try{
            const mill = await Mill.create({ name });
            req.socket = mill;
            next();
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

    async del(req, res, next){
        const id = req.params.id;
        try{
            const mill = await Mill.findByPk(id);
            if(!mill)
                return res.status(401).send({ error: "Mill not found!" });
            
            await mill.destroy();
            return res.status(200).send({ message: "success" });
        }catch(error){
            return res.status(406).send(error);
        }
    }
}

module.exports = new MillController();

