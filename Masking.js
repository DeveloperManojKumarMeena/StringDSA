//Show last four digit of bank account no. and fill other *
const accountNumber = "123456789012";
const lastFourDigits = accountNumber.slice(-4); // "9012"
const maskedNumber = lastFourDigits.padStart(accountNumber.length, "*");

console.log(maskedNumber); 