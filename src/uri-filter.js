const url = require('url');
const queryFilter = require('./query-filter.js');

function uriFilter(path, query, filter) {
  const newQuery = queryFilter(query, filter);
    
  if (newQuery === null) {
    return null;
  }

  const uri = url.format({
    pathname: path,
    query: newQuery,
  });

  return uri;
}

module.exports = uriFilter;
