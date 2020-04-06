const fs = require('fs');
const readme = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readme);

fs.readFile('readMe.txt', 'utf8', (err,data) =>{
    fs.writeFile('writeMe.txt', data)
});
console.log('FIRST YOU MUST SEE THIS');