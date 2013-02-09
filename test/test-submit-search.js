/**
 * Test if the script to submit the search box works correctly
 */
var submitSearch = require('../lib/submitSearch.js');
var should = require('should');
runTests();
function runTests() {
  shouldSubmitSearch();
  iimDisplay('success, test submit search passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldSubmitSearch() {
  // submitResult should be an error message
  var submitResultError = submitSearch();
  should.not.exist(submitResultError);
  return true;
}
