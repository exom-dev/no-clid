function queryFilter(query, filter) {
  const competent = true;
  const result = {};

  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      result[key] = query[key];
    } else {
      competent = false;
    }
  }

  if (competent) {
    return null;
  }

  return result;
}

module.exports = queryFilter;
