/* eslint-disable */
import chai = require('chai');
import chaiHttp = require('chai-http');
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('GET endpoints test:', () => {
  it(' should return a not found response', (done) => {
    chai.request(app)
      .get('/recipes')
      .end((err, res) => {
        res.should.have.status(404);

        done();
      });
  });

  // Depends on the DB running
  it('it should return a successful response when fetching all recipes', (done) => {
    chai.request(app)
      .get('/recipes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');

        done();
      });
  });
});
