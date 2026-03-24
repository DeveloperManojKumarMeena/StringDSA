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

//4.`toUpperCase()` | Converts to uppercase |
console.log(string.toUpperCase())
//5.toLowerCase()` | Converts to lowercase |
console.log(string.toLocaleLowerCase())

//6.concat()` | Concatenates strings
console.log(string.concat(" Good to go"))

//7.trim()` | Removes spaces from both sides
let name = '                  mukesh                      ';
console.log(name.trim()) //it's remove extra spaces of both side of line not mid of line

//8.`indexOf(substring)` | Returns first index of substring 
console.log(typeof(name))

let str = "Hello World";
console.log(str.charAt(6));

let stri = "JavaScript";
console.log(stri.slice(4, 10));
