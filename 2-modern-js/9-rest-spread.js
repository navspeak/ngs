const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first) //10
console.log(restOfItems) //[20,30,40]

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;
console.log(person) //{ firstName: 'John', lastName: 'Doe' }

const newArray = [...restOfItems];//copying array
console.log(newArray) //[ 20, 30, 40 ]
const newObject = {
  ...person, //copying object -> but this is shallow copy
};
console.log(newObject)//{ firstName: 'John', lastName: 'Doe' }