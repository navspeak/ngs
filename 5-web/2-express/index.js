//Express exports its top level API as function
const express = require('express');
// This function returns an object that we call server here
const server = express();
const serverListener = () => console.log(`Server is running on ${PORT}`);

server.get('/', (req, res) => {
    res.send("hello express");
});

server.get('', (req, res) => {

});

server.listen(4242, serverListener);

