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
                .then(function (res) {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(function (err) {
                    throw err;
                })
        });
    });

    /*
     * Test the /POST route
     */
    describe('/POST food', () => {
        const correct_food = {
            name: "food1"
        }
        const missing_food = {
            title: "food1"
        }

        it('create food (correctly)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(correct_food)
                .then(function (res) {
                    expect(res).to.have.status(201);
                    done();
                })
                .catch(function (err) {
                    throw err;
                })
        });

        it('create food (duplicate name)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(correct_food)
                .then(function (res) {
                    expect(res).to.have.status(400);
                    done();
                })
                .catch(function (err) {
                    expect(err).to.have.status(400);
                    done();
                })
        });

        it('create food (wrong format)', (done) => {
            chai.request(server.app)
                .post('/api/v1/food/create')
                .send(missing_food)
                .then(function (res) {
                    expect(res).to.have.status(400);
                    done();
                })
                .catch(function (err) {
                    expect(err).to.have.status(400);
                    done();
                })
        });
    });
});