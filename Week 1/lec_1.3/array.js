// forEach says that you give me an array and a function
// and i will run that function for every element of the array.

// eg: arr = [1,2,3,4,5]

function printElement(num) {
    num = num + 1; 
    console.log(num);
     
}
const arr = [1,2,4,45,70]


arr.forEach(printElement)

// in this case, forEach is an HOC and it accepts the second function as the callback function.