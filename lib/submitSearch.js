/**
 * Find the search input field and fill it with the given string
 * @param {String} input the string to place in the search box
 * @return {String} null if the search box was filled correctly, an error message if an error occurred
 */

module.exports = function() {
  // imacros needs all spaces replaced by "<SP>"
  // code === 1 only on success
  var code = iimPlay('CODE: SET !TIMEOUT_TAG 0\n'
                     + 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:search ATTR=ID:search_0');
  if (code === 1) {
    return null;
  }

  // an error occurred, alert this to the user
  var error = 'There was an error submitting the search: ' + iimGetLastError() + ', iMacros error code: ' + code;
  return error;
};