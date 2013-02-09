var rk = require('required-keys');
module.exports = function (data) {
  var keys = ['config','searchInput'];
  var err = rk.truthySync(data, keys);
  if (err) { return err; }
  var searchInput = data.searchInput;

  // fill search input
  var fillSearch = data.fillSearch;
  if (!fillSearch) {
    fillSearch = require('./fillSearch');
  }
  err = fillSearch(searchInput);
  if (err) { return err; }


  // submit search
  var submitSearch = data.submitSearch;
  if (!submitSearch) {
    submitSearch = require('./submitSearch');
  }

  err = submitSearch();

  if (err) { return err; }

  // process results
  var processRows = data.processRows;
  if (!processRows) {
    alert('loading production process rows');
    processRows = require('./processRows');
  }
  err = processRows(data);
  return err;
};