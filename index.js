'use strict'

/**
 * Module dependencies
 */

const crypto = require('crypto')

exports.encrypt = (str, key) => {
  const c = crypto.createCipheriv('aes-128-ecb', convertCryptKey(key), '')
  let ret = ''
  ret += c.update(str, 'utf8', 'hex')
  ret += c.final('hex')
  return ret.toUpperCase()
}


exports.decrypt = (str, key) => {
  const d = crypto.createDecipheriv('aes-128-ecb', convertCryptKey(key), '')
  let ret = ''
  ret += d.update(str, 'hex', 'utf8')
  ret += d.final('utf8')
  return ret
}

exports.convertCryptKey = convertCryptKey

function convertCryptKey(strKey) {
  const newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  strKey = new Buffer(strKey)
  for (let i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i]
  return newKey
}