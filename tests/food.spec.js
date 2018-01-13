process.env.PORT = 8765;

const model = require('../app/models');

const Food = model.Food;

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const {
    should,
    expect,
    assert
} = require('chai');

chai.use(chaiHttp);

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 * @author https://gist.github.com/kerimdzhanov/7529623
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Our parent block
describe('Foods', () => {
    before(() => {
        return model.sequelize.sync({
            force: true
        });
    });

    after((done) => {
        server.server.close();
        done();
    });

    /*
     * Test the /GET route
     */
    describe('/GET food', () => {
        it('it should GET all the foods', (done) => {
            chai.request(server.app)
                .get('/api/v1/foods')
                .then((res) => {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch((err) => {
                    throw err;
                })
        });

        it('it should GET indv food', (done) => {
            const name = "food" + getRandomInt(1, 500000)
            Food.create({
                    name: name
                })
                .then((f) => {
                    chai.request(server.app)
                        .get('/api/v1/food/1')
                        .then((res) => {
                            expect(res).to.have.status(200);
                            done();
                        })
                        .catch((err) => {
                            throw err;
                        })
                })
        });

        it('GET not exist indv food', (done) => {
            chai.request(server.app)
                .get('/api/v1/food/400')
                .then((res) => {
                    expect(res).to.have.status(404);
                    done();
                })
                .catch((err) => {
                    expect(err).to.have.status(404);
                    done();
                })
        });
    });

    /*
     * Test the /POST route
     */
    describe('/POST food', () => {
        const correct_food = {
            name: "food" + getRandomInt(1, 500000)
        }
        const missing_food = {
            title: "food" + getRandomInt(1, 500000)
        }

        it('create food (correctly)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(correct_food)
                .then((res) => {
                    expect(res).to.have.status(201);
                    done();
                })
                .catch((err) => {
                    throw err;
                    done();
                })
        });

        it('create food (duplicate name)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(correct_food)
                .then((res) => {
                    expect(res).to.have.status(400);
                    done();
                })
                .catch((err) => {
                    expect(err).to.have.status(400);
                    done();
                })
        });

        it('create food (wrong format)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(missing_food)
                .then((res) => {
                    expect(res).to.have.status(400);
                    done();
                })
                .catch((err) => {
                    expect(err).to.have.status(400);
                    done();
                })
        });
    });

    describe('/PUT food', () => {
        const new_name = {
            name: "new_food" + getRandomInt(1, 500000)
        }

        it('update not exist food', (done) => {
            chai.request(server.app)
                .put('/api/v1/food/500')
                .send(new_name)
                .then((res) => {
                    expect(res).to.have.status(404);
                    done();
                })
                .catch((err) => {
                    expect(err).to.have.status(404);
                    done();
                })
        });

        it('update exist food', (done) => {
            Food.count()
                .then((i) => {
                    chai.request(server.app)
                        .put('/api/v1/food/' + (i - 1))
                        .send(new_name)
                        .then((res) => {
                            expect(res).to.have.status(200);
                            expect(res.body).to.have.property('id');
                            expect(res.body.id).to.equal(i - 1);
                            expect(res.body).to.have.property('name');
                            expect(res.body.name).to.equal(new_name.name);
                            done();
                        })
                        .catch((err) => {
                            throw err;
                        })
                })
                .catch((err) => {
                    throw err;
                })
        });
    });

    describe('/DELETE food', () => {
        it('delete not exist food', (done) => {
            chai.request(server.app)
                .delete('/api/v1/food/500')
                .then((res) => {
                    expect(res).to.have.status(404);
                    done();
                }).catch((err) => {
                    expect(err).to.have.status(404);
                    done();
                })
        });

        it('delete food', (done) => {
            Food.count()
                .then((i) => {
                    chai.request(server.app)
                        .delete('/api/v1/food/' + (i - 1))
                        .then((res) => {
                            expect(res).to.have.status(204);
                            done();
                        })
                        .catch((err) => {
                            throw err;
                        })
                })
                .catch((err) => {
                    throw err;
                })
        });
    });
});