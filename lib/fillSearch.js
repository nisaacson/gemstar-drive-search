/**
 * Find the search input field and fill it with the given string
 * @param {String} input the string to place in the search box
 * @return {String} null if the search box was filled correctly, an error message if an error occurred
 */

module.exports = function(input) {
  // imacros needs all spaces replaced by "<SP>"
  var formattedInput = input.replace(/ /g, '<SP>');

  // code === 1 only on success
  var code = iimPlay('CODE: SET !TIMEOUT_TAG 0\n'
                     + 'TAG POS=1 TYPE=* ATTR=TXT:Drive<SP>serial<SP>number*\n'
                     + 'TAG POS=R1 TYPE=INPUT ATTR=TXT:* CONTENT=' + formattedInput);

  if (code === 1) {
    return null;
  }

  // an error occurred, alert this to the user
  var error = 'There was an error filling in the search box: ' + iimGetLastError() + ', iMacros error code: ' + code;
  return error;
};