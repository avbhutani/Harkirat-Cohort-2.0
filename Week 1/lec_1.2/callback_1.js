// callback functions are nothing but agar ek function me dusre kisi function ko bhej do
// kisi specific time pe execute krne ke liye, to usko callback ka naam dedia gya hai.


// Here sum is now a higher order function.
function sum(num1,num2,callbackFunction) {
    let ans = num1 + num2
    callbackFunction(ans)
}

function printer1(ans) {
    console.log('First Function ' + ans);
}

function printer2(ans) {
    console.log('Second Function ' + ans);
}


// Now the 3rd argument that is the function can be anything. Any function cann be passed and executed there, so it becomes
// a little more handy and easy for us to control the things, and get the result as per our needs.
let ans =  sum(1,2,printer2);