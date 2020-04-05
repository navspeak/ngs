// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(chunk);
//   }
// });
//or
process.stdin.pipe(process.stdout)
// let c = 0;
// const echoInterval = () => {
//     process.stdin.pipe(process.stdout);
//     c++;
//     if (c == 5) {
//         clearInterval(timeIntervalObj);
//     }
// }
//
// const timeIntervalObj = setInterval(echoInterval, 100);