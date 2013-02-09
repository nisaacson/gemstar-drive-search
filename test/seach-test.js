/**
 * Test if the script to fill the search box works correctly
 */
var search = require('../index.js');
var should = require('should');
runTests();
function runTests() {
  shouldGiveErrorWhenConfigIsMissing();
  shouldGiveErrorWhenSearchInputsAreMissing();
  shouldSearchThroughInputs();
  iimDisplay('success, search test passes');
}

/**
 * @return {Boolean} true if test passes
 */
function shouldGiveErrorWhenConfigIsMissing() {
  var data = {
    searchInputs: [],
    config: null
  };
  var result = search(data);
  result.length.should.eql(1);
  var error = result[0];
  error.key.should.eql('config');
  return result;
}

function shouldGiveErrorWhenSearchInputsAreMissing() {
  var data = {
    searchInputs: null,
    config: {}
  };
  var result = search(data);
  result.length.should.eql(1);
  var error = result[0];
  error.key.should.eql('searchInputs');
  return result;
}

function shouldSearchThroughInputs() {
  var searchInputs = ['foo', 'bar'];
  var count = searchInputs.length;
  var timesCalled = 0;
  var searchForInput = function (params) {
    timesCalled++;
  };
  var data = {
    searchInputs: searchInputs,
    config: {},
    searchForInput: searchForInput
  };
  var err = search(data);
  should.not.exist(err);
  count.should.eql(timesCalled);
}