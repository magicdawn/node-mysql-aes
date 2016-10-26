'use strict'

const AES = require('../')
const should = require('should')

const cli = `
mysql root@localhost:(none)> SELECT HEX(AES_ENCRYPT('啊哈', 'mysecret'));
+----------------------------------------+
| HEX(AES_ENCRYPT('啊哈', 'mysecret'))   |
|----------------------------------------|
| D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185       |
+----------------------------------------+
1 row in set
Time: 0.001s
mysql root@localhost:(none)> SELECT CAST(AES_DECRYPT(UNHEX('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185'), 'mysecret') as CHAR)
+------------------------------------------------------------------------------------+
| CAST(AES_DECRYPT(UNHEX('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185'), 'mysecret') as CHAR)   |
|------------------------------------------------------------------------------------|
| 啊哈                                                                               |
+------------------------------------------------------------------------------------+
1 row in set
Time: 0.002s
mysql root@localhost:(none)>
`

describe('AES.', function() {
  it('encrypt', function() {
    AES.encrypt('啊哈','mysecret').should.equal('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185')
  })

  it('decrypt', function() {
    AES.decrypt('D8D7DAA8ADEFDB9D8F4E6DCF9CEBE185', 'mysecret').should.equal('啊哈')
  })
})