// TASK 1

console.error("TASK 1");

let arr1 = [1, 5, 3, 4];

const logItems = function (arr) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`Номер елементу - ${i + 1}, значення елементу ${arr1[i]}`);
  }
};

logItems(arr1);

// TASK 2

console.error("TASK 2");

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
};

console.log(calculateEngravingPrice("Hello World", 5));

// TASK 3

console.error("TASK 3");

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = " ";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(
  "Longest word - `Hello, World abadfdajifi` is - " +
    findLongestWord("Hello, World abadfdajifi")
);

// TASK 4

console.error("TASK 4");

const formatString = function (string) {
  if (string.length < 40) {
    return string;
  } else {
    string = string.substr(0, 40);
    return string + "...";
  }
};

console.log(
  formatString("dfjbvndfjbvkjdbvhbdfhvbdhfbvhdfbhbvbbbfffffffgfddgfgdfff")
);

// TASK 5

console.error("TASK 5");

const checkForSpam = function (string) {
  string = string.toLowerCase();

  if (string.includes("spam") || string.includes("sale")) {
    return true;
  }

  return false;
};

console.log("Повідомлення spAm - " + checkForSpam("spAm"));
console.log("Повідомлення bebebe - " + checkForSpam("bebebe"));

// TASK 6

console.error("TASK 6");

let numbers = [];
let total = 0;

while (true) {
  const input = prompt("Введіть число або натисніть Cancel для завершення:");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив чисел порожній");
}

console.log(numbers);

// TASK 7

console.error("TASK 7");
