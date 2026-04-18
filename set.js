let prompt = require('prompt-sync')();
/* Check if the pangram or not 
:Pangram is a sentence where every letter of the english alphaabet
 appears at least once */

 /*
 
 let s = prompt('Please enter a string for check Pangram or Not.  ')
 let set = new Set();

 for(let i=0;i<s.length;i++){
    let ch = s.charAt(i);
    set.add(ch)
 }
 if(set.size===26)console.log("String is Pangram")
    else console.log('Not Panagram')
 */

 //Jewels & Stones Problem
/* 
let jewels = prompt('Enter Jewles value  ');
let stones = prompt('Enter stones string  ');
let set = new Set();
let count = 0;

for(let i=0;i<jewels.length;i++){
    set.add(jewels.charAt(i))
}
for(let i=0;i<stones.length;i++){
    let ch = stones.charAt(i);
    if(set.has(ch)) count++
}
console.log(count)
*/


//Happy Number Problem?
let n = prompt('Enter a number for check  =>  ');
let set = new Set()

while(true){
    let sum = 0;
    while(n>0){
        let rem = n%10;
        sum +=(rem*rem);
        n= Math.floor(n/10)
    }
    if(sum== 1){console.log("Happy Number") 
        break
    }

        if(set.has(sum)){console.log('Not a Happy Number')
            break}
            else set.add(sum)

        n=sum
}

