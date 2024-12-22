// TASK 1

document.getElementById("helloButton").addEventListener('click', () => {
  alert("Hello world!")
})

// TASK 2

const checkGuess = () => {
  const min = 1;
  const max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const guessField = Number(document.getElementById('guessField').value);
  const guessResult = document.getElementById('guessResult');

  if(guessField === randomNum) {
    guessResult.textContent = (`Ви вгадали число! Число було: ${randomNum}`);
  } else {
    guessResult.textContent = (`Ви не вгадали! Число було: ${randomNum}, а ви ввели: ${guessField}`);
  }
 
}

// TASK 3

let clickCounter = 0;

document.addEventListener('click', () => {
  clickCounter++
  
  let clicksCounter1 = document.getElementById("clicksCounter");

  clicksCounter1.textContent = clickCounter;
})

// TASK 4

console.error("TASK 4");

const applyCallbackToEachElement = (arr, callback) => {
  const result = [];

  for(let el of arr) {
    result.push(callback(el))
  }

  return result;
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// TASK 6

console.error("TASK 6");

const calculateDiscountedPrice = (price, discount, callback) => {

  price = price * (1 - discount / 100)
  callback(discount, price)

};

const showDiscountedPrice = (discount, price) => console.log(`Ціна зі знижкою ${discount}% - ${price}$`);

calculateDiscountedPrice(100, 10, showDiscountedPrice)