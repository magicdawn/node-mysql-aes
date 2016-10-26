# mysql-aes
> A Node.js implementation of MySQL aes_encrypt and aes_decrypt

[![Build Status](https://img.shields.io/travis/magicdawn/node-mysql-aes.svg?style=flat-square)](https://travis-ci.org/magicdawn/node-mysql-aes)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/node-mysql-aes.svg?style=flat-square)](https://codecov.io/gh/magicdawn/node-mysql-aes)
[![npm version](https://img.shields.io/npm/v/mysql-aes.svg?style=flat-square)](https://www.npmjs.com/package/mysql-aes)
[![npm downloads](https://img.shields.io/npm/dm/mysql-aes.svg?style=flat-square)](https://www.npmjs.com/package/mysql-aes)
[![npm license](https://img.shields.io/npm/l/mysql-aes.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Credits
https://github.com/mysqljs/mysql/issues/419#issuecomment-19873609

## Install
```sh
$ npm i mysql-aes --save
```

## API
```js
const AES = require('mysql-aes')
```

|return type|signature|equal in mysql|
|---|---|---|
| `String` | `AES.encrypt(str, key)` | `SELECT AES_ENCRYPT(str, key)` |
| `String` | `AES.decrypt(encrypted, key)` | `SELECT CAST(AES_DECRYPT(UNHEX(encrypted), key) as CHAR)`

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org