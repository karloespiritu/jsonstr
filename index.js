
'use strict';

/**
 * print JSON Object as formatted string
 * @param {object} object
 * @return {string}
 */

module.exports = function(obj) {
  return JSON.stringify(obj, null, 2);
}