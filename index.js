const url = require('url');

function noclid(filter = ['fbclid', 'gclid']) {
  if (!(filter && (filter instanceof Array))) {
    throw `Invalid argument 'filter' (expected: array | found: ${typeof(filter)})`;
  }

  const filterMap = {};

  for (const key of filter) {
    filterMap[key] = true;
  }

  return (request, response, next) => {
    let competent = true;
    const query = {};

    for (const key in request.query) {
      if (Object.prototype.hasOwnProperty.call(filterMap, key)) {
        competent = false;
      } else {
        query[key] = request.query[key];
      }
    }

    if (competent) {
      return next();
    }    

    const uri = url.format({
      pathname: request.path,
      query,
    });

    response.redirect(302, uri);
  };
}

module.exports = noclid;
