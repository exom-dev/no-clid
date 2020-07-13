const queryFilter = require('./src/query-filter.js');
const uriFilter = require('./src/uri-filter.js');

function fuckClid(filterArray = ['fbclid', 'gclid']) {
  const filter = {};

  for (const key of filterArray) {
    filter[key] = true;
  }

  return (request, response, next) => {
    const uri = uriFilter(request.path, request.query, filter);
    
    if (uri === null) {
      return next();
    }

    response.redirect(302, uri);
  };
}

module.exports = fuckClid;

module.exports.queryFilter = queryFilter;
module.exports.uriFilter = uriFilter;
