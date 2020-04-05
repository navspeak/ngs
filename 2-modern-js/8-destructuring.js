// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;
// is equivalent - useful when
const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );

const circle = {
  label: 'circleX',
  radius: 2,
  precision: 3,
};


const circleArea = ({ radius }, { precision = 2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea(circle) //calls with empty second object and uses default of 2
);

console.log(
    circleArea(circle, {precision: 5})
);

const [first, sec, , forth] = [1,2,3,4];
const[f, ...restOfItems] = [10,20,30,40];

// > const[f, ...restOfItems] = [10,20,30,40];
// undefined
// > f
// 10
// > restOfItems
//     [ 20, 30, 40 ]
