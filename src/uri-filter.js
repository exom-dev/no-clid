const url = require('url');
const queryFilter = require('./query-filter.js');

function uriFilter(path, query, filter) {
  const query = queryFilter(query, filter);
    
  if (query === null) {
    return null;
  }

  const uri = url.format({
    pathname: path,
    query,
  });

  return uri;
}

module.exports = uriFilter;
