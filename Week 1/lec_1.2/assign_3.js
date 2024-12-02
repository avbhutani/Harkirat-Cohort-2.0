// Made a clock in terminal.

function getCurrentTime() {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    console.log(`${h}:${m}:${s}`)
}

console.log('Current Time is: ');

setInterval(getCurrentTime,1000)