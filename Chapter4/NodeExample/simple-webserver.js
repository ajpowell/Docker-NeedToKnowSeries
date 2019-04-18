//
// Docker: Need To Know Series
//
// Ver Date       Author            Details
// --- ---------- ----------------- ---------------------------------------   
// 1.0 18-04-2019 Adrian Powell     Initial release
//
//
//
// A very simple node example that serves a text response 
// to an http request on port 3000.
//

const PORT = 3000;

var http = require('http');

http.createServer(function (req, res) {
  var dt = new Date();
  res.end(dt.toISOString() + ' - This is text from Node.js running in a Docker container!');
}).listen(PORT);

console.log('Simple Webserver is running...');

