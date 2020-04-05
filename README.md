# Node.js: Getting Started
# Forked for Pluralsight lab excercise from https://github.com/jscomplete/ngs 
* Node REPL 
    *.editor, .help, .break
    * .save history.js
    * .load m7.js
    * use tab for auto complete and double tab for discovery like put . and double tab or c and double tab etc
    * Underscore  => last value
* node -p "os.cpus().length"
* node -p "process.versions.v8"
* node -h 
* node --v8-options (ones starting w/harmony are beta. Look for tracing, strict etc)
* NODE_DEBUG="http" node 1-executing-scripts/1-hello-world.js 
* NODE_PATH
* ECMA script | ECMAScript 2016 = ES6
* BABEL compiler can compile in progress features to browser supported JavaScript
* npm install -g npm - to update npm (global)
* npm install -D nodemon => goes in DevDependencies
* npm init [--yes] => to start afresh
* Semantic Versioning (SemVer) 
    * Major(breaking changes).Minor(Backwards compatibilty).Patch(bug fixes
    *~1.2.3 => can install most recent patch (1.2.x) version (1.2.4 ok or 1.3.0 not used)
    *^1.2.3 => 1.x.y, x >=2, y anything
    *you can use 4.x etc but semVer is better
 * npm login > in the package folder npm init > npm push