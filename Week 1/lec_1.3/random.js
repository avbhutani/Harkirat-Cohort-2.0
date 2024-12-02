console.log(parseInt((Math.random() * 100) % 10))

let student = [{
    name1: "anubhav",
    clas1: 'u2'
}, {
    name1:"rishab",
    clas1:'ok'
}
]
console.log
(Object.keys(student)) 

function helper(student) {
    student.name1 = 'hello'
    student.clas1 = 'world'
}

student.forEach(helper)
console.log(student)