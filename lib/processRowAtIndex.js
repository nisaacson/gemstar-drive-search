module.exports = function(data) {
  var linkText = '.txt';
  var index = data.index;
  var err;
  var folderPath = data.folderPath;
  var code = iimPlay('CODE: SET !TIMEOUT_TAG 0\n'
                     + 'TAG POS=' + index + ' TYPE=TR ATTR=TXT:*\n'
                     +' ONDOWNLOAD FOLDER=' + folderPath + ' FILE= WAIT=YES \n'
                     + 'TAG POS=R1 TYPE=A ATTR=TXT:' + linkText
                     + 'WAIT SECONDS=4');
  if (code !== 1) {
    err = 'txt download link not found, imacros error: ' + iimGetLastError() + ' return code: ' + code;
    return err;
  }

};