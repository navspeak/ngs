const http = require('http'); // requires returns API of the module
//higher order function
// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

const requestListener = (req, res) => {
    res.end('Hello World\n');
    /*
res.write("Hello World\n')
res.end();
     */
}

const server = http.createServer(requestListener);
// const server = http.createServer(requestListener()); => we pass function reference and not the function call

server.listen(4242, () => {
    console.log('Server is running...');
});
