//Show last four digit of bank account no. and fill other *
const accountNumber = "123456789012";
const lastFourDigits = accountNumber.slice(-4); // "9012"
const maskedNumber = lastFourDigits.padStart(accountNumber.length, "*");



//Table formation example of padEnd() method

let items = [["Apple", "50"], ["Banana", "20"], ["Watermelon", "100"]];

items.forEach(item => {
    let name = item[0].padEnd(15, ".");
    let price = item[1].padStart(3, "_");
    });

