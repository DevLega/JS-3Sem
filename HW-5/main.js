// 1 task
let drinkResult = document.getElementById("drinkResult");

document.getElementById("coffe").addEventListener("click", function () {
  drinkResult.textContent = "Кава";
});

document.getElementById("tea").addEventListener("click", function () {
  drinkResult.textContent = "Чай";
});

document.getElementById("juice").addEventListener("click", function () {
  drinkResult.textContent = "Сік";
});

// 2 task

document.getElementById("checkDay").addEventListener("click", function () {
  let inputDay = document
    .getElementById("inputDay")
    .value.toString()
    .toLowerCase();
  const dayResult = document.getElementById("dayResult");

  switch (inputDay) {
    case "понеділок":
      inputDay = "Робочий день";
      break;
    case "вівторок":
      inputDay = "Робочий день";
      break;
    case "середа":
      inputDay = "Робочий день";
      break;
    case "четверг":
      inputDay = "Робочий день";
      break;
    case "п'ятниця":
      inputDay = "Робочий день";
      break;
    case "суббота":
      inputDay = "Вихідний";
      break;
    case "неділя":
      inputDay = "Вихідний";
      break;
    default:
      inputDay = "Такого дня не існує";
      break;
  }

  dayResult.textContent = inputDay;
});

// 3 task

document.getElementById("checkSeason").addEventListener("click", function () {
  let inputSeason = Number(document.getElementById("inputSeason").value);
  const SeasonResult = document.getElementById("SeasonResult");

  if (inputSeason === 12 || inputSeason === 1 || inputSeason === 2) {
    inputSeason = "Зима";
  } else if (inputSeason === 3 || inputSeason === 4 || inputSeason === 5) {
    inputSeason = "Весна";
  } else if (inputSeason === 6 || inputSeason === 7 || inputSeason === 8) {
    inputSeason = "Літо";
  } else if (inputSeason === 9 || inputSeason === 10 || inputSeason === 11) {
    inputSeason = "Осінь";
  }

  SeasonResult.textContent = inputSeason;
});

// 4 task

document.getElementById("checkMonth").addEventListener("click", function () {
  let inputMonth = Number(document.getElementById("inputMonth").value);
  const MonthResult = document.getElementById("MonthResult");

  switch (inputMonth) {
    case 1:
      inputMonth = "31";
      break;
    case 2:
      inputMonth = "28/29";
      break;
    case 3:
      inputMonth = "31";
      break;
    case 4:
      inputMonth = "30";
      break;
    case 5:
      inputMonth = "31";
      break;
    case 6:
      inputMonth = "30";
      break;
    case 7:
      inputMonth = "31";
      break;
    case 8:
      inputMonth = "31";
      break;
    case 9:
      inputMonth = "30";
      break;
    case 10:
      inputMonth = "31";
      break;
    case 11:
      inputMonth = "30";
      break;
    case 12:
      inputMonth = "31";
      break;
  }

  MonthResult.textContent = `${inputMonth} days in month`;
});

// 5 task
document.getElementById("checkColor").addEventListener("click", function () {
  const colorsResult = document.getElementById("colorsResult");
  let inputColors = document.getElementById("inputColors").value;

  switch (inputColors.toLowerCase()) {
    case "червоний":
      inputColors = "стоп";
      break;
    case "зелений":
      inputColors = "йти";
      break;
    case "жовтий":
      inputColors = "чекати";
      break;
    default:
      inputColors = "Варіанти які можна вводити: 'червоний' 'зелений' 'жовтий'";
      break;
  }

  colorsResult.textContent = inputColors;
});

// 6 task
document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", function () {
    const operator = button.getAttribute("data-operator");
    let NumbersResult = document.getElementById("NumbersResult");
    let inputFirstNumber = Number(
      document.getElementById("inputFirstNumber").value
    );
    let inputSecondNumber = Number(
      document.getElementById("inputSecondNumber").value
    );
    let result;

    switch (operator) {
      case "+":
        result = inputFirstNumber + inputSecondNumber;
        break;
      case "-":
        result = inputFirstNumber - inputSecondNumber;
        break;
      case "*":
        result = inputFirstNumber * inputSecondNumber;
        break;
      case "/":
        if (inputSecondNumber === 0) {
          result = "На нуль ділити не можна";
          break;
        }
        result = inputFirstNumber / inputSecondNumber;
        break;
      default:
        result = "Невідома операція";
        break;
    }

    NumbersResult.textContent = result;
  });
});