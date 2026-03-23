//Method's of string

//1.length | Returns string length
let s = "hello"
console.log(s.length) //output => 5

//2.slice(start, end)` | Extracts substring 
let string = 'Hello DSA Solvers'
console.log(string.slice(5,9)) //output => DSA
//slice take negative indexes also
console.log(string.slice(-7)) //output => Solvers

//3.substring(start, end)` | Similar to `slice`, but no negative indexes 
console.log(string.substring(5,9)) //output=>DSA