let arr = [1,2,3,4,5]

function helper(i) {
    return i*i
}


// changes each of the element according to the function that you provide to it;
const ans = arr.map(helper)

const ans2 = arr.map((i)=> i*i)

console.log(ans)
console.log(ans2)

