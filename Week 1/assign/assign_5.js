/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = new Set(['a','e','i','o','u'])
    let count = 0;

    for(let char of str.toLowerCase()) {
        if(vowels.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("bcdfg")); // Output: 0