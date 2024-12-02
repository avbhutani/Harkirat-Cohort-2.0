// Creation of a new promise
const d = new Promise(function(resolve) {
    console.log('Hello world')
    resolve()
    // setTimeout(resolve(),1000)
})

console.log(d)
d.then(onResolve)
console.log('outside the promise.');

// The function to run if the promise gets resolved.
function onResolve() {
    console.log('Function resolved')
}


// tell the promise, what function to run if the promise gets resolved.
