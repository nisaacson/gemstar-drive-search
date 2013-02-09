/**
 * Test if the script to process rows correctly
 */
var processRows = require('../lib/processRows.js');
var should = require('should');
runTests();
function runTests() {
  shouldProcessrows();

  shouldReturnErrorWhenFolderPathIsNotSet();
  iimDisplay('success, test process rows passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldProcessrows() {
  var processRowAtIndex = function (index) {
    iimDisplay('process row at index called');
  };
  var data = {
    config: {
      folderPath: 'foo'
    },
    processRowAtIndex: processRowAtIndex
  };
  var error = processRows(data);
  should.not.exist(error);
  return true;
}



/**
 * @return {Boolean} true if test passes
 */
function shouldReturnErrorWhenFolderPathIsNotSet() {
  var data = {
    config: {
      folderPath: ''
    }
  };
  var error = processRows(data);
  should.exist(error);
  return true;
}
