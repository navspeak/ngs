// 1. Depends on built-in http
const http = require('http');

//2. Only creates, doesn't activate
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Hello World\n');
});

//3. Activates the server, and keeps V8 running
server.listen(4242, () => {
  console.log('Server is running...');
});
