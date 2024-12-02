const { default: axios } = require("axios")

const res = ()=> {
    return new Promise(async (resolve,reject)=>{
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes')
        resolve(response)
        console.log('First checkpoint');
    })  
}

function done(response) {
    console.log(response.data.data);
}
res().then(done)