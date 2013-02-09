var rk = require('required-keys');
module.exports = function (data) {
  // make sure data contains the required fields
  var keys = ['config', 'searchInputs'];
  var err = rk.truthySync(data, keys);
  if (err) {
    return err;
  }

  // dependecy injection
  var searchForInput = data.searchForInput;
  if (!searchForInput) {
    searchForInput = require('./lib/searchForInput');
  }
  var searchInputs = data.searchInputs;
  var config = data.config;
  for (var i in searchInputs) {
    var input = searchInputs[i];
    var searchData = {
      input: input,
      config: config
    };
    err = searchForInput(searchData);
    // break on first error
    if (err) { return err; }
  }
};