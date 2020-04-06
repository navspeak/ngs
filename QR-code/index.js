//https://bonaroo.nl/2020/01/22/creating-express-middleware-package.html
const express = require('express');
const qr = require('qr-image')
// const fs = require('fs');

const server = express();

server.get('/QRCode', (req, res) => {
    var code = qr.image('Navneet', { type: 'png' });
    res.setHeader('Content-type', 'image/png');  //sent qr image to client side
     code.pipe(res);
});

server.listen(8000, () => {
    console.log('Server is running...');
});



