'use strict'

const AES = require('../')
const should = require('should')

describe('AES.', function() {
  it('encrypt', function() {
    AES.encrypt('啊哈','mysecret').should.equal('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185')
  })

  it('decrypt', function() {
    AES.decrypt('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185', 'mysecret').should.equal('啊哈')
  })
})