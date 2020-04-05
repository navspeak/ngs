const dynamicPropertyName = "prop1";
const PI = Math.PI;
const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [dynamicPropertyName]: 42,
  //PI: PI
  PI,
};
//obj.dynamicPropertyName -> undefined
//obj.prop1 = 42
/*
Object Literal
const obj = {
  key: value
}
 */