const http = require('http'); // requires returns API of the module
const PORT = 4242;
const requestListener = (req, res) => {
    console.dir(req.url)
  //  console.dir(req, {depth :0 })
    res.end('Hello World\n');
}
const serverListener = () => console.log(`Server is running on ${PORT}`);

const server = http.createServer();
server.on('request', requestListener);

server.listen(PORT, serverListener);

/* IncomingMessage: https://nodejs.org/api/http.html#http_class_http_incomingmessage
 two URL - '/' and '/favicon.ico'
  ServerResponser: https://nodejs.org/api/http.html#http_class_http_serverresponse
  req and res are streams
 */