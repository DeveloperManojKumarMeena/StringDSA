/*
let s = 'A';
let E = '😊';
console.log('s length is '+ s.length)
console.log('E length is '+ E.length)
*/

/*
let s = "😊";

console.log(s.charAt(0)); // half character 😬
console.log([...s][0]);        // same half
*/

/*
let str = 'WikiBuku adalah salah satu proyek Wikimedia yang dimulai sejak 10 Juli 2003. Sejak itu, para sukarelawan penulis telah menulis sekitar 5.542 halaman dan ratusan buku.'
console.log(str.replace(/AdaLah/i,'Apple'))
console.log(str.replace('adalah','Apple'))
*/

let s = '* '

//match methode

let text = "JavaScript is amazing!";
let result = text.match(/is/);


/* Output: ["is", index: 11, input: "JavaScript is amazing!", groups: undefined] 
(यहाँ पहला मैच और उसकी पोजीशन मिली)
*/

let str = "I have 2 apples, 5 bananas and 100 oranges.";
let regex = /\d+/g; // \d+ मतलब एक या उससे ज्यादा अंक

let found = str.match(regex);
console.log(found); // Output: ["2", "5", "100"]

