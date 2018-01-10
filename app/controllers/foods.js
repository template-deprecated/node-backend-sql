const Food = require('../models').Food;

module.exports = {
    create(req, res) {
        return Food.create({
                name: req.body.name
            })
            .then(food => res.status(201).send(food))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Food.findAndCountAll({
                "attributes": [
                    "id",
                    "name"
                ]
            })
            .then(foods => {
                result = {
                    "complete": true,
                    "length": foods.count,
                    "list": foods.rows
                }

                res.status(200).send(result)
            })
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Food.findById(req.params.fid)
            .then(food => {
                if (!food) {
                    return res.status(404).send({
                        complete: false,
                        message: 'Food Not Found',
                    });
                }
                // FIXME: Clean code design
                result = {
                    "complete": true,
                    "id": food.dataValues.id,
                    "name": food.dataValues.name
                }

                return res.status(200).send(result);
            })
            .catch(error => {
                console.log(req.params.fid)
                res.status(400).send(error)
            });
    },
    // FIXME: This method might no need.
    update(req, res) {
        return Food
            .findById(req.params.fid)
            .then(food => {
                if (!food) {
                    return res.status(404).send({
                        message: 'Food Not Found',
                    });
                }
                return food.update({
                        name: req.body.name || food.name,
                    })
                    .then(() => res.status(200).send(food)) // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Food
            .findById(req.params.fid)
            .then(food => {
                if (!food) {
                    return res.status(404).send({
                        message: 'Food Not Found',
                    });
                }
                return food
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}