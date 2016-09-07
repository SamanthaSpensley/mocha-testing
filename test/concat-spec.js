const chai = require('chai')
const supertest = require('supertest')

const app = require('../app.js')

const should = chai.should();
const api = supertest(app);

describe('Sending a POST to /api/concat', () => {
  describe('should succeed', () => {
    it('in concat-ing two strings together', (done) => { //using done makes this function asynchronous, so test won't run before data is returned
      api.post('/api/concat')
        .send({
          num1: '5',
          num2: '2'
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal(52);
          done();
        })
    })
  })
  describe('should fail', () => {
    it('when the nothing is sent in', (done) => {
      api.post('/api/concat')
        .expect(432)
        .end((err, res) => {
          if(err) return done(err)

          res.body.message.should.be.equal('No data, fool');
          done();
        })
    })
  })
})
