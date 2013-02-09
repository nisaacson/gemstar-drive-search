/**
 * Test if the script to process rows correctly
 */
var search = require('../index');
var should = require('should');

// Configuration
var config = {
  folderPath: '~/Downloads/'
};
main();
function main() {
  var searchInputs = ['foo', 'bar'];

  var data = {
    config: config,
    searchInputs: searchInputs
  };

  var err = search(data);
  should.not.exist(err);
}
