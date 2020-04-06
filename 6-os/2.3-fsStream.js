const fs = require('fs');

fs.createReadStream('readme.txt', {autoClose: false})
.on('data', chunk => console.log(chunk.toString()))
// the end event is fired when there is no more data to read, but file hasn't been closed
    .on('end', function () {
        // NOTE - You won't be able to use an ARROW Function as this in that case will be the implicit module
        // in case of func it will be the readstream which we want
        let s = this;
        console.dir(this, {depth: 0});
        setTimeout(() => s.destroy(), 3000)
    })
    .on('close', () => console.log('closed now'))
