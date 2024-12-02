// This is an ugly way to write a callback function, basically what it does is, a callback is passed over to a function.


// and in the fs module readFile function, whenever the last function is calle,d it says that this function is to be executed
// cb is a callback passed to the parent function and the readFile also contains a callback,
// that basically executes the callback that has come from the parent function.

const fs = require('fs')

function helperRead(cb) {
    fs.readFile('./notes.txt','utf-8',function (err,data) {
        cb(data)
    })
}

function onDone(data) 
{
    console.log(data)
}

helperRead(onDone)