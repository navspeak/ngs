{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope = variables leak out
  // let solves that problem
}
// i will be 11

for (let i = 1; i <= 10; i++) {
  // Block Scope = variables leak out
  // let solves that problem
}
// i is not defined
function sum(a, b) {
  // Function Scope: variables defined in function scope can't be accessed outside the scope
  // Like the result, a, b variable
  var result = a + b;
}

{
  {
    // let and const won't leak
    // var will
    // const is ref
  }
}

sum(4 + 3);
