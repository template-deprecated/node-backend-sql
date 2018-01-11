process.env.NODE_ENV = 'test';
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
        return model.sequelize.sync();
    });

    after((done) => {
        server.server.close();
        done();
    });

    /*
     * Test the /GET route
     */
    describe('/GET book', () => {
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
});