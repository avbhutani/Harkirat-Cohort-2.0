const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let count = 0;

app.use(bodyParser.json())

// countRequests middleware

async function countRequests(req,res,next) {
    count++;
    console.log(count)
    next()
}
let sum = 0;
function calculateAverage(sum,count) {
    return (sum/count);
}
app.get('/time',(req,res)=> {
    const t = new Date()
    const ts = t.getSeconds();
    res.send({ts})
})
app.post('/',countRequests,(req,res)=> {
    const time = new Date()
    const s = time.getSeconds()
    const s2 = req.body.currentTime;
    sum += (s-s2);
    const result = calculateAverage(sum,count)
    res.send({average:result})
})


app.listen(4000,()=> {
    console.log('Server is listening at 4000')
})