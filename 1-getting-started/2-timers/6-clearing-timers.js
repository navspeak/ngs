const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);

//setImmediate()
//clearInterval
clearTimeout(timerId);


/*
const timeoutObj = setTimeout(() => {
  console.log('timeout beyond time');
}, 1500);

const immediateObj = setImmediate(() => {
  console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
  console.log('interviewing the interval');
}, 500);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);
 */