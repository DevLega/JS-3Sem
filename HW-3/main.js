//

let result = 5 + 5 + '5';

console.log(result);
console.log(typeof result);

//

let myEmail = "olegshaker8888@gmail.com"

console.log(myEmail.length, myEmail.includes("@"));

//

let word1 = "My";
let word2 = "name";
let word3 = "is";

let fullName = `${word1} ${word2} ${word3} Viktor`;

console.log(fullName);

//

let userName = "Oleg";
let payment = 10;

document.getElementById('payment').addEventListener('click', function () {
    alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)
})

//