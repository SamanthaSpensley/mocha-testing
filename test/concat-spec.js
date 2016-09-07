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
          str1: "race",
          str2: "car"
        })
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.body.result.should.be.equal("racecar");
          done();
        })
    })
  })
  describe('should fail', () => {
    it('when the nothing is sent in', (done) => {
      api.post('/api/add')
        .expect(432)
        .end((err, res) => {
          if(err) return done(err)

          res.body.message.should.be.equal('No data, fool');
          done();
        })

    })
  })
})
