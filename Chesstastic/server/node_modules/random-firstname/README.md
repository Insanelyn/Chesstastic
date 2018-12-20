# random-firstName

> Generate a random first name.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-firstName/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-firstName/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-firstName)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-firstName/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-firstName)


## Install

```
$ npm install --save random-firstName 
```

## Usage

```js
var randomFirstName = require('random-firstName');

// API
// - randomFirstName([options]);

// options
// - gender


randomFirstName();
// => 'Leila'
```

Optionally specify a gender to limit first names to that gender:

```js
randomFirstName({ gender: 'female' });
// => 'Emma'
```

## Related

- [random-lastName](https://github.com/mock-end/random-lastName) - Generate a random last name. 
- [random-fullName](https://github.com/mock-end/random-fullName) - Generate a random full name. 
- [random-age](https://github.com/mock-end/random-age) - Generate a random age. 
- [random-birthday](https://github.com/mock-end/random-birthday) - Generate a random birthday. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-firstName/issues/new).
