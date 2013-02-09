/**
 * Iterate over all rows in the table
 * @return {String} null if extract completed successfully
 */
var rk = require('required-keys');
module.exports = function(data) {
  var keys = ['folderPath'];
  var err = rk.truthySync(data.config, keys);
  if (err) { return (err); }

  // dependecy injection (for testing);
  var processRowAtIndex = data.processRowAtIndex;
  if (!processRowAtIndex) {
    processRowAtIndex = require('./processRowAtIndex.js');
  }
  var code = iimPlay('CODE: TAG POS =1 TYPE=TABLE ATTR=TXT:* EXTRACT=HTM');
  if (code !==1) {
    err = 'results table not found, imacros error: ' + iimGetLastError();
    return err;
  }

  var extract = iimGetLastExtract();
  var index = 1;
  var linkText = '.txt';
  while(true) {
    index++;
    code = iimPlay('CODE: SET !TIMEOUT_TAG 0\n'
                   + 'TAG POS=' + index + ' TYPE=TR ATTR=TXT:*\n'
                   + 'TAG POS=R1 TYPE=A ATTR=TXT:' + linkText + ' EXTRACT=HTM');
    if (code !== 1) {
      err = 'txt download link not found, imacros error: ' + iimGetLastError() + ' return code: ' + code;
      return err;
    }
    extract = iimGetLastExtract();
    if (extract === '#EANF#') {
      return;
    }

    err = processRowAtIndex(index);
    if (err) {
      return err;
    }
  }
  return null;
};