var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// var url = require('url');

exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);
  // Check if incoming request method is GET
    // Check if it's asking for / or /index.html
      // fetch index.html from disk and send back as response
      // - get asset name
      var asset = routes[req.url];
      // console.log('asset:', asset);
      if (asset) {
        httpHelpers.serveAssets(res, asset, httpHelpers.sendResponse);
      }
      else {
        // check if we have archived copy
        archive.serveArchives(req, res, httpHelpers.sendResponse);


        // httpHelpers.sendResponse(res, 'File Not Found...', 404);
      }

        // - callback: sending the response, once the data is collected by fs

};

var routes = {
  '/': 'index.html',
  '/index.html': 'index.html',
  '/styles.css': 'styles.css'
  // '/www.google.com': 'www.google.com'
};