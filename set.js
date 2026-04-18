/* Check if the pangram or not 
:Pangram is a sentence where every letter of the english alphaabet
 appears at least once */

 let prompt = require('prompt-sync')();
 let s = prompt('Please enter a string for check Pangram or Not.  ')
 let set = new Set();

 for(let i=0;i<s.length;i++){
    let ch = s.charAt(i);
    set.add(ch)
 }
 if(set.size===26)console.log("String is Pangram")
    else console.log('Not Panagram')