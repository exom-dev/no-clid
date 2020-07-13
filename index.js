const queryFilter = require('./src/query-filter.js');
const uriFilter = require('./src/uri-filter.js');

function noclid(filter = ['fbclid', 'gclid']) {
  if (!(filter && (filter instanceof Array))) {
    throw `Invalid argument 'filter' (expected: array | found: ${typeof(filter)})`;
  }

  const filterMap = {};

  for (const key of filter) {
    filterMap[key] = true;
  }

  return (request, response, next) => {
    const uri = uriFilter(request.path, request.query, filterMap);

    console.log(request.path, request.query, filterMap, uri);
    
    if (uri === null) {
      return next();
    }

    response.redirect(302, uri);
  };
}

module.exports = noclid;

module.exports.queryFilter = queryFilter;
module.exports.uriFilter = uriFilter;
