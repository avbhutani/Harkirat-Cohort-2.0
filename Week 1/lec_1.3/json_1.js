const data = '{"name":"anubhav"}'


// converts to JSON 
const jsonData = JSON.parse(data)
console.log(jsonData)


const backToString = JSON.stringify(jsonData)
console.log(backToString)