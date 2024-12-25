// TASK 1

const bankAccount = {
  ownerName: "Oleg",
  accountNumber: "563745",
  balance: 0,
};

const bankBalance = document.getElementById("bankBalance");
const bankInput = document.getElementById("bankInput");

const getBalance = () => bankAccount.balance;

const getBankInputValue = () => Number(bankInput.value);

const updateBalance = () => {
  bankBalance.textContent = getBalance();
};

const deposit = function () {
  const inputValue = getBankInputValue();
  if (inputValue > 0) {
    bankAccount.balance += inputValue;
    updateBalance();
  } else {
    alert("Веддіть коректну суму для депозиту");
  }
};

const withdraw = function () {
  const inputValue = getBankInputValue();
  if (inputValue > 0 && inputValue <= getBalance()) {
    bankAccount.balance -= inputValue;
    updateBalance();
  } else alert("Недостатньо коштів або некоректна сумма");
};

bankBalance.textContent = getBalance();

// TASK 2

const weather = {
  temperature: true,
  humidity: 1,
  windSpeed: 1,

  updateInput() {
    temperatureResult.textContent = this.temperature;
  },

  checkTemperature() {
    if (Number(temperatureInput.value) >= 0) {
      this.temperature = false;
    } else {
      this.temperature = true;
    }

    this.updateInput();
  },
};

const temperatureInput = document.getElementById("temperatureInput");
const temperatureResult = document.getElementById("temperatureResult");

// TASK 4

const movie = {
  title: "Один в свинятнику",
  director: "Джеймс Бонд",
  year: 1400,
  rating: 8.8,

  isHighRated() {
    return this.rating > 8;
  },
};

const titleElement = document.getElementById("movie-title");
const directorElement = document.getElementById("movie-director");
const yearElement = document.getElementById("movie-year");
const ratingElement = document.getElementById("movie-rating");

titleElement.textContent = `Title: ${movie.title}`;
directorElement.textContent = `Director: ${movie.director}`;
yearElement.textContent = `Year: ${movie.year}`;
ratingElement.textContent = `Rating: ${movie.rating}`;

if (movie.isHighRated()) {
  titleElement.classList.add("high-rating");
}
