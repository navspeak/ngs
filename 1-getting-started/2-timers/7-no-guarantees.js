setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);

for (let i = 0; i < 1e10; i++) {
  // Block Node Synchronously
}
// the timeout function must trigger console log after half a sec, but it won't as there's
// a long sync loop which blocks V8 - bad thing to do in practise