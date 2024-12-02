function findSum() {
    let sum = 0;
    for(let i = 0;i<100000000;i++) {
        sum += i;
    }
    console.log(sum)
}

// Async functions.
// setTimeout functions
// Read File
// API requessts.

// This task is delegated to the web API, and then when the web API first maintains a clock, for 1s.
// that will give the task to the main thread, or the call stack, only when the thread is free. 
// so whenever the thread becomes free, then the task is given to the thread, and that thread, then runs that particular program, 
// till then it will wait, till the thread becomes empty.
setTimeout(findSum,1000);

console.log('Hello world')
