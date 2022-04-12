/**
 * Create promise wrapper
 */
module.exports = (promise) =>
  promise.then((data) => [null, data]).catch((error) => [error]);
