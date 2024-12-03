const express = require('express')
const app = express()
// app.use((req,res)=> {
//     res.send({message:'Route not found !'})
// })

// The question mark makes the username optional.
// The difference between : and ? is that, : defines a param, and ? defines a query.
// 3 ways to send the data over to the api, one is the URL, body and the headers.
// the safest one is the header and sensitive info shall be sent through it.


// It's a middleware, and like this, all the middlewares can be validated.
// Middleware is nothing but an additional set of callback functions that you want to be 
// executed before the actual and the last callback function is actually called.


// If you want to pass the data from one middleware onto the other, then,
// the additional data shall be added to the request and then can be accessed in the following upcoming middlewares.

// rate limitters are generally added up in the middleware.

// this is linked to the current server instance and thus restarting the server resets this.
let requests = 0;
async function rateLimit(req,res,next) {
    requests++;
    if(requests >= 5) {
        res.send({message:'Request limit exceeded.'})
    }
    else next()
}

app.use(rateLimit)


// if i use app.use() and specify something in between, that means that middleware needs to be called everywhere.
// at every route, that middleware shall be callled and the required checks can be done.
async function checkUsername(req,res,next) {
    if(!req.params.username) {
        return res.send({message:'Provide Params'})
    }
    else next()
}
async function checkPassword(req,res,next) {
    if(!req.params.password) {
        return res.send({message:'Unable to verify'})
    }
    else next()
}


// first goes onto the checkUsername middleware, then the checkPassword, and then anything else.
app.get('/api/:username?/:password?',checkUsername,checkPassword,(req,res)=> {
    res.send({message:'ok'})
})

app.listen(4000,() => {
    console.log('Listening at port 4000')
})