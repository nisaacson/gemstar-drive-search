/**
 * Test if the script to process rows correctly
 */
var processRows = require('../lib/processRows.js');
var should = require('should');
runTests();
function runTests() {
  shouldProcessrows();
  iimDisplay('success, test process rows passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldProcessrows() {
  var input = 'foobar';
  var error = processRows(input);
  should.not.exist(error);
  return true;
}
