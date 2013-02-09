/**
 * Test if the script to fill the search box works correctly
 */
var fillSearch = require('../lib/fillSearch.js');
var should = require('should');
runTests();
function runTests() {
  shouldFillSearch();
  iimDisplay('success, test fill search passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldFillSearch() {
  var input = 'foobar';
  // fillResult should be an error message
  var fillResultError = fillSearch(input);
  should.not.exist(fillResultError);
  return true;
}
