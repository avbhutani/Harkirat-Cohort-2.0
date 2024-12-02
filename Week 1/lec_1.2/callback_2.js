// Here calculateArithmetic is a callback function.

function calculateArithmetic(num1,num2,performOperation) {
    return performOperation(num1,num2);
}


function sum(num1,num2) {
    return num1 + num2;
}
function multiply(num1,num2) 
{
    return num1 * num2;
}
function divide(num1,num2) {
    return (num2 != 0) ? num1/num2 : 0;
}


let ans = calculateArithmetic(1,5,divide);
console.log(ans);
