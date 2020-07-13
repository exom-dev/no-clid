# About

NoClid is an URL query filter for Node.js / Express.

It was made to reject the useless and bloated clid query parameters, such as `fbclid` and `gclid`.

# Getting started

## Installation

You can install NoClid just like any other npm package.

```bash
npm i @exom-dev/no-clid --save
```

> Note: this packages includes a declaration file for TypeScript.

## Usage

NoClid is an express middleware. Here's a basic example.

```javascript
const app = require('express')();
const noclid = require('@exom-dev/no-clid')();

app.use(noclid());

app.get('/', (request, response) => {
  response.send('Hello!');
});

app.listen(80);
```

> If it is the case, NoClid will automatically redirect the user to the filtered URL, while keeping other request parameters the same.

### Changing the default

NoClid supports an array with query parameters you want to filter as fucntion argument. By default, NoClid will filter `fbclid` and `gclid` query parameters.

```javascript
app.use(noclid(['q', 'lang', 'any-query-you-want']));
```

# License <a href="https://github.com/exom-dev/no-clid/blob/master/LICENSE"><img align="right" src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>

This project was created by [The Exom Developers](https://github.com/exom-dev).

The NoClid project is licensed under the [MIT](https://github.com/exom-dev/no-clid/blob/master/LICENSE) license.
