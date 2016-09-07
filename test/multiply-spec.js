const chai = require('chai')
const supertest = require('supertest')

const app = require('../app.js')

const should = chai.should();
const api = supertest(app);


//multiply
describe('Sending a POST to /api/multiply', () => {
  describe('should succeed', () => {
    it('in multiplying two numbers', (done) => {
      api.post('/api/multiply')
        .send({
          num1: 5,
          num2: 2
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal(10)
          done();
        })
    })
  })
  describe('should fail', () => {
    it('when nothing is sent in', (done) => {
      api.post('/api/multiply')
        .expect(432)
        .end((err, res) => {
          if(err) return done(err)

          res.body.message.should.be.equal('No data, fool');
          done();
        })
    })
  })
})
