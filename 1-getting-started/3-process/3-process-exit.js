setTimeout(() => process.exit(), 20000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello. For 20 seconds you are on an echo server!');
//process.stdin.pipe(process.stdout);

process.stdin.on('readable', () => {
  chunk = process.stdin.read();

  if(chunk != null) {
    process.stdout.write(chunk)
  }
})
