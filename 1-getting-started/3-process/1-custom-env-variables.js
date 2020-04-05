console.log('Current user is', process.env.USER);

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);
/*
$ VAL1=10 VAL2=20 node 1-custom-env-variables.js
or
$ export VAL1=100
$ export VAL2=200
$ node 1-custom-env-variables.js
Or
You could use
node script -p "process.argv" hello 42
 */