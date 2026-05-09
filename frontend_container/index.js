const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Docker rodando no Node.js v22 - Autor: " + process.env.AUTHOR);
});
server.listen(3000);