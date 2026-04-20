const http = require('http');

http.createServer((req, res) => {
  res.end('Hello Docker');
}).listen(3000);
