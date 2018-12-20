# random-fullName

> Generate a random full name.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-fullName/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-fullName/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-fullName)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-fullName/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-fullName)


## Install

```
$ npm install --save random-fullName 
```

## Usage

```js
var randomFullName = require('random-fullName');

// API
// - randomFullName([options]);

// options
// - gender
// - middleName

randomFullName();
// => 'Dafi Vatemi'
```

Optionally include the middle name:

```js
randomFullName({middleName: true});
// => 'Nelgatwu Powuku Heup'

randomFullName({middleName: 'Suosat'});
// => 'Doctor Suosat Am'
```

Optionally specify the gender:

```js
randomFullName({gender: 'male', middleName: true });
// => 'Ezme Dafi Iza'
```

## Related

- [random-firstName](https://github.com/mock-end/random-firstName) - Generate a random first name. 
- [random-lastName](https://github.com/mock-end/random-lastName) - Generate a random last name. 
- [random-age](https://github.com/mock-end/random-age) - Generate a random age. 
- [random-birthday](https://github.com/mock-end/random-birthday) - Generate a random birthday. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-fullName/issues/new).
