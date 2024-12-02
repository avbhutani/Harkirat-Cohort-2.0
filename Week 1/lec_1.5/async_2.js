const fs = require('fs')

// it lets you read the data from the file.
// this is an async function, this will be delegated to someone else.
fs.readFile('./notes.txt','utf-8',(err,data)=> {
    console.log(data)
})


console.log('Hi there.')
let sum = 0;
for(let i = 0;i<10000000;i++) {
    sum += i;
}
console.log(sum);
// so when the main thread will get free, then only, the sum will get printed.