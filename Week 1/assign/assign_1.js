/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let i = 0, j = 0,n1 = str1.length, n2 = str2.length;
if (n1 != n2) return false;

let arr = new Array(26).fill(0);

while (i < n1) {
  let index = str1.charCodeAt(i) - 'a'.charCodeAt(0)
  arr[index]++;
  
  i++;
}
let arr2 = new Array(26).fill(0)
while(j < n2) {
    let index = str2.charCodeAt(j) - 'a'.charCodeAt(0)
    arr2[index]++;
    j++;
}

i = 0 ;

while(i < 26) {
    if(arr[i] != arr2[i]) return false;
    i++;
}
    
return true;
}

console.log(isAnagram('anubhav','nubhava'))