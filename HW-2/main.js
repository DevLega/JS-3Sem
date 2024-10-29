//

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(celsius + "°C = " + fahrenheit + "°F");

//

let daysInMonth = 31;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;

console.log(`У місяці з ${daysInMonth} днями:\nГодин: ${hoursInMonth};\nХвилин: ${minutesInMonth}.`);

//

let playerHealth = 100;
let playerStamina = 100;

document.getElementById('minusHealth').addEventListener('click', function () {
    playerHealth = playerHealth - 5;
    console.log(`Вас побили! Тепер ваш рівень здоров'я: ${playerHealth}`);
})

document.getElementById('minusStamina').addEventListener('click', function () {
    playerStamina = playerStamina - 10;
    console.log(`Ви побігали. Тепер ваш рівень енергії: ${playerStamina}`);
})

//

let flourPrice = 2;
let totalPrice = 0;
let applyDiscount = false;

document.getElementById('addProduct').addEventListener('click', function () {
    totalPrice = totalPrice + 2;
})

document.getElementById('applyDiscount').addEventListener('click', function () {
    applyDiscount = true;
})

document.getElementById('countPrice').addEventListener('click', function () {
    if (applyDiscount === true) {
        totalPrice = totalPrice * 0.9;
        applyDiscount = false;
    }
    document.getElementById('totalPrice').textContent = totalPrice;
    console.log(`Сумма: ${totalPrice}`);
    totalPrice = 0;
})

//

let numberFloor = 1.3;

console.log(`Ваше число ${numberFloor} округлилося до ` + Math.floor(numberFloor));

//

let numberFloat = "1.3425423Heflwk4e2"

console.log(`Ваш рядок ${numberFloat} перетворився у ` + parseFloat(numberFloat));

//

let numberInt = "134fdsfgfs"

console.log(`Ваш рядок ${numberInt} перетворився у ` + parseInt(numberInt));

//

let numberSqrt = 16;

console.log(`Ваше число ${numberSqrt} перетворилося у ` + Math.sqrt(numberSqrt));

//

let numberCile = 42;
let numberString = '123';

console.log(`Ваш рядок ${numberString} перетворилося у ` + typeof parseInt(numberString));
console.log(`Ваше число ${numberCile} перетворилося у ` + typeof toString(numberCile));

//