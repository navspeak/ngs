const EventEmitter = require('events');
const myEmitter = new EventEmitter();
setImmediate(() => myEmitter.emit('TEST_EVENT')); // placed on Event loop to be immediately exceuted after
                                // other lines in the program is executed
myEmitter.on('TEST_EVENT', () => {
    console.log('Test even was fired');
})

myEmitter.on('TEST_EVENT', () => {
    console.log('Test even was fired');
})

myEmitter.on('TEST_EVENT', () => {
    console.log('Test even was fired');
})
//myEmitter.emit('TEST_EVENT');
// Streams are Event Emitters
// process.stdin, process.stdout
