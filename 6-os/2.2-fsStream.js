const fs = require('fs');
fs.createReadStream('readme.txt')
.on('data', chunk => console.log(chunk.toString()))
/* --------------------- */
let reader = fs.createReadStream('readme.txt', {
    flag: 'a+',
    encoding: 'ascii',
    start: 8,
    end: 64,
    highWaterMark: 16
});

reader.on('data', chunk => console.log(chunk.toString()))
/* --------------------- */

fs.createReadStream('readme.txt')
.pipe(fs.createWriteStream('writeMe.txt'))
.on('data', chunk => console.log(chunk.toString()))
    .on('close', () => console.log('File closed'));

/* --------------------- */
fs.createReadStream('readyme.txt', {flags: 'r'})
    .on('readable', () => console.log('Ready to read'))
    .on('data', chunk => console.log(chunk.toString()))
    .on('error', err => console.log("Error!!!"))
/*----------------------*/
/*----------------------*/
let f1 = () => {fs.createReadStream('readyme.txt', {flags: 'r'})
    .on('data', chunk => console.log(chunk.toString()))
    .on('error', err => console.log("Error!!!"))};

setTimeout(f1, 5000);