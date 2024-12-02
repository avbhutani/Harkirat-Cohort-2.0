const fs = require('fs')

function promiseWrapper() {
    return new Promise(
        function(resolve,reject) {
        fs.readFile('./notes.txt','utf-8',function(err,data) {
            resolve(data)
        }
    )
    })
}
function onDone(err) {
    console.log('Here')
    console.log(err);
}

// Just a syntactic sugar, .then() will now be having the function as same as what was being passed in that 
// function as a callback is now passed here.
promiseWrapper().then(onDone)