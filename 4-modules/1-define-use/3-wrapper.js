//hidden wrapping function
//function(exports, module, require, __filename, __dirname) {
let x = 10; //scoped in the built-in wrapping function, not global unlike browser
console.log(arguments);
exports.a = 12; //alias for module.exports
module.exports.b = 14; // both a and b are part of API of this function

// exports = func1 = () => {}; // won't work as it breaks link between module and exports
module.exports =  () => console.log('Test'); // top level API is a function - can export only one function

// return module.exports
//}

// implicit caller => (module.exports, module,...)