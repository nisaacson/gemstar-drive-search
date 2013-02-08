/**
 * Test if the script to fill the search box works correctly
 */
var fillSearch = require('../lib/fillSearch.js');
var should = require('should');
runTests();
function runTests() {
  shouldReturnFalseWhenSearchNotFound();
  iimDisplay('success, test fill search on incorrect page passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldReturnFalseWhenSearchNotFound() {
  // load a webpage which does not contain the correct anchors
  var code = iimPlay('CODE: URL GOTO=http://www.google.com');
  if (code !== 1) {
    alert('test-fill-search failed, could not load dummy page for testing: ' + iimGetLastError());
  }

  var input = 'foobar';
  // fillResult should be an error message
  var fillResultError = fillSearch(input);
  should.exist(fillResultError);
  return true;
}
