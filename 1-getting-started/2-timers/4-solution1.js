const theFuncWith1Args = delay => {
  console.log('Hello after ' + delay + ' seconds');
};

const theFuncWith2Args = (delay, units) => {
  console.log('Hello after ' + delay + ' ' + units);
};

setTimeout(theFuncWith1Args, 4 * 1000, 4);

setTimeout(theFuncWith1Args, 8 * 1000, 8);

setTimeout(theFuncWith2Args, 4 * 1000, 4, 'secs');

setTimeout(theFuncWith2Args, 8 * 1000, 8, 'SECONDS');