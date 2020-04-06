const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', '.npmrc'];
console.log(process.env.HOME);
files.forEach(file => {
  console.log(file);
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
