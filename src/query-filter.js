function queryFilter(query, filter) {
  let competent = true;
  const result = {};

  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      competent = false;
    } else {
      result[key] = query[key];
    }
  }

  if (competent) {
    return null;
  }

  return result;
}

module.exports = queryFilter;
