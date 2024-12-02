const arr = [1,2,3,4,5]


// The same thing the filter function does, basically write a condition under it of what all
// elements to consider and all those elements can be filtered from the array/list.
const ans = arr.filter(function helper(i) {
    if(i % 2 == 0) {
        return true;
    }
    return false;
})

console.log(ans)