//hidden wrapping function
//function(exports, module, require, __filename, __dirname) {

// exports = func1 = () => {}; // won't work as it breaks link between module and exports
module.exports = {
    f1: () => console.log('Test'), // top level API is a function - can export only one function
    f2 : arg => console.log(`Hello ${"arg"} from theNamedFunc`),
}

// return module.exports
//}

// implicit caller => (module.exports, module,...)