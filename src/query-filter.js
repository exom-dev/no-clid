function queryFilter(object, filter) {
  const competent = true;
  const result = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      result[key] = object[key];
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
