// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

/* BAD WAY TO DO

const print = () => {
    console.log('Hello World');
};
for (let i = 0; i < 5; i++) {
    print();
}

console.log("Done");*/


let c = 0;
const printHello = () => {
    if (c != 5) {
        console.log("Hello World");
        c++;
    } else {
        console.log("Done");
        clearTimeout(intervalId);
    }
}
const intervalId = setInterval(printHello, 1000);


