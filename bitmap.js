 let prompt = require('prompt-sync')();
// let s = prompt("Enter a string")
// let freqArr = new Array(123).fill(0);

// for(let i=0;i<s.length;i++){
//     let ascii = s.charCodeAt(i);
//     freqArr[ascii] = freqArr[ascii] + 1;
// }

// for(let i = 0; i<freqArr.length;i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i) + ' -> ' + freqArr[i]);
//     }
// }
let s1=prompt('Enter string one');
let s2=prompt('Enter string two');
let freqArr = new Array(123).fill(0);
let isAnagram = true;

if(s1.length = s2.length){
    for(let i =0; i<s1.length;i++){
        let ascii1=s1.charCodeAt(i);
        let ascii2=s2.charCodeAt(i);

        freqArr[ascii1]=freqArr[ascii1]+1
        freqArr[ascii2]=freqArr[ascii2]-1
    }
    for(let i=0; i<freqArr.length;i++){
        if(freqArr[i]!=0){
            isAnagram = false;
            break
        }
    }
}else{
    console.log('Given string are not Anagram')
}
if(isAnagram)console.log('Given string is An Anagram')
    else console.log('Given string is not an anagram')
