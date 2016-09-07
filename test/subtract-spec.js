const chai = require('chai')
const supertest = require('supertest')

const app = require('../app.js')

const should = chai.should();
const api = supertest(app);


//Subtracting
describe('Sending a POST to /api/subtract', () => {
  describe('should succeed', () => {
    it('in subtracing two numbers', (done) => {
      api.post('/api/subtract')
        .send({
          num1: 5,
          num2: 2
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal(3)
          done();
        })
    })
  })
  describe('should fail', () => {
    it('when nothing is sent in', (done) => {
      api.post('/api/subtract')
        .expect(432)
        .end((err, res) => {
          if(err) return done(err)

          res.body.message.should.be.equal('No data, fool');
          done();
        })
    })
  })
})
