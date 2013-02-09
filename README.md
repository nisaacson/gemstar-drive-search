# Gemstar Searial Numbers
Uses iMacros for Firefox to search for serial numbers and download the results to a file on disk.
[![Dependency Status](http://david-dm.org/nisaacson/gemstar-drive-search/status.png)](http://david-dm.org/nisaacson/gemstar-drive-search)
## Installation
There are a few dependencies you will need to run the code.

- iMacros for Firefox [https://addons.mozilla.org/en-us/firefox/addon/imacros-for-firefox/](https://addons.mozilla.org/en-us/firefox/addon/imacros-for-firefox/)
- Node and npm (node package manager) [http://nodejs.org/](http://nodejs.org/) The windows install should install both node.exe and npm
- Browserify to bundle the .js source files into a single file [https://github.com/substack/node-browserify](https://github.com/substack/node-browserify). Once you have node and npm install you can install browserify with the command
    - `npm install -g browserify`

- Navigate to the source directory. Install the needed packages
`npm install`
- Use browserify to bundle the javascript source into a single file that iMacros understands
`browserify test\test-fill-search-fails-on-incorrect-page.js -o dist\test-fill-search-fails-on-incorrect-page.js`
In Firefox load the iMacros extension and click *Edit*->*Options*. Then under *Paths* set *Folder Macros* to the *dist* folder containing search.js. Restart Firefox


## Usage
Load the webpage containing the search box. Go to the *Play* tab in iMacros and press the *Play* button.
