const http = require('http');

http.createServer((req, res) => {
  res.write('Hello Docker ' + process.env.APP_ENV);
  res.end('\nWelcome to my container.');
}).listen(3000);
