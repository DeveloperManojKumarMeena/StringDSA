let s ="malyalaylam";
let isPallindromic = true;
let i = 0 , j = s.length-1;

while(i<j){
    if(s[i]!=s[j]){
        isPallindromic=false;
        break;
    }
    i++
    j--
}
if(isPallindromic)console.log('Given string is Pallindromic String')
    else console.log('given string not a Pallindromic String')