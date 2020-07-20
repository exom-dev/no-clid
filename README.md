# About

**NoClid** is an URL query filter for Node.js / Express.

It was made to reject the useless and bloated clid query parameters, such as `fbclid` and `gclid`.

# Getting started

## Installation

You can install NoClid just like any other npm package.

```bash
npm i @exom-dev/no-clid --save
```

> Note: this package includes a declaration file for TypeScript.

## Usage

NoClid is an express middleware. Here's a basic example:

```javascript
const app = require('express')();
const noclid = require('@exom-dev/no-clid');

app.use(noclid());

app.get('/', (request, response) => {
  response.send('Hello!');
});

app.listen(80);
```

> If the URL contains `clid` parameters, NoClid will automatically redirect the user to the filtered URL, while keeping other request parameters the same.

### Default
By default, NoClid will filter `fbclid` and `gclid` query parameters.

### Changing the default

NoClid accepts an array of query parameters that should be filtered.

```javascript
app.use(noclid(['q', 'lang', 'any-query-you-want']));
```

# Releases

[0.1.1](https://github.com/exom-dev/no-clid/releases/tag/0.1.1) - July 20th, 2020

[0.1.0](https://github.com/exom-dev/no-clid/releases/tag/0.1.0) - July 13th, 2020

# License <a href="https://github.com/exom-dev/no-clid/blob/master/LICENSE"><img align="right" src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>

This project was created by [The Exom Developers](https://github.com/exom-dev).

The NoClid project is licensed under the [MIT](https://github.com/exom-dev/no-clid/blob/master/LICENSE) license.
