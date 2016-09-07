const chai = require('chai');
const should = chai.should(); //BDT
const expect = chai.expect
const assert = chai.assert

describe('Canary test', () => {  //takes a string and callback function
  it('the string hello should be hello', () => {
    const hello = 'hello';

    hello.should.be.equal('hello')
  })
  it('typeof string should be string', () => {
    const str = 'sagag'
    str.should.be.a('string')
    expect(str).to.be.a('string') //example using expect
    assert.typeOf(str, 'string') //example using assert
  })
})
