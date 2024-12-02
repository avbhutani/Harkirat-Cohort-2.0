const fs = require('fs')
async function readFilee () {
var data = fs.readFile('./notes.txt','utf-8',(err,data)=> 
{
    console.log('Thanks for reading the file',data)
}
)
}

readFilee()