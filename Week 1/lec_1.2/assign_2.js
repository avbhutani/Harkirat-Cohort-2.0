const d = new Date()

let a1 = d.getTime()
console.log(d.getTime());

setTimeout(()=> {
    let b = new Date()
    console.log(b.getTime()-a1)
},1000)


// Learning, whenever the date object will be initialized, it will only store that date and time inside of it.
// so calling the same object later in the program would be giving me the same time as it was 
// initialzed
