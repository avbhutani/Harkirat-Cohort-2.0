const d = new Date()
const t1 = d.getTime()
let j = 0;

// as computation goes up, time required, goes up.
for(let i = 0;i<100000000;i++) {
    j++;
}

const d2 = new Date()
const t2 = d2.getTime()
console.log(t2 - t1)