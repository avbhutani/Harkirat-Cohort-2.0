const express = require('express')
const app = express()

app.post('/',(req,res)=> {
    console.log(req.body)
    res.send({message:'ok'})
})

app.listen(3500,(req,res)=> {
    console.log(`Server is listening on 3500`)
})