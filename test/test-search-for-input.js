/**
 * Test if the script to fill the search box works correctly
 */
var assert = require('assert');
var search = require('../index.js');
var should = require('should');
var searchForInput = require('../lib/searchForInput');
runTests();
function runTests() {
  var fillSearchCalled = false;
  var submitSearchCalled = false;
  var processRowsCalled = false;
  var fillSearch = function (input) {
    fillSearchCalled = true;
  };
  var submitSearch = function () {
    submitSearchCalled = true;
  };
  var processRows = function (data) {
    processRowsCalled = true;
  };

  var data = {
    fillSearch: fillSearch,
    submitSearch: submitSearch,
    processRows: processRows,
    config: {},
    searchInput: 'foo'
  };


  var err = searchForInput(data);
  should.not.exist(err);
  assert.ok(fillSearchCalled, 'fillSearch should have been called');
  assert.ok(submitSearchCalled, 'submitSearch should have been called');
  assert.ok(processRowsCalled, 'processRows should have been called');
  iimDisplay('success, test search for input passes');
}

/**
 * @return {Boolean} true if test passes
 */
