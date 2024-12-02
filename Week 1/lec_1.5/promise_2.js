new Promise((resolve,reject)=> {
    console.log('Before Resolution');
    
    resolve(done)
}).then(done).catch(notDone).finally(()=>{
    console.log('Done');
    
})

function done() {
    console.log('After resolution')
}

function notDone() 
{
    console.log('Error aagya bhai');
    
}