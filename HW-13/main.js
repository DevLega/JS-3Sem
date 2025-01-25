// TASK 1

const user = {
  hobby: "swimming",
  premium: true,
};

user.mood = "happy";
user.premium = false;
const { hobby, premium, mood } = user;
console.log(`${hobby}, ${premium}, ${mood}`);

// TASK 2

console.error("TASK 2");

const countProps = function (obj) {
  const { length: props } = Object.keys(obj);
  return props;
};

console.log(countProps(user));

// TASK 3

console.error("TASK 3");

const employers = [
  { name: "Bob", completeTasks: 1 },
  { name: "Sam", completeTasks: 7 },
  { name: "Jake", completeTasks: 4 },
  { name: "Phil", completeTasks: 5 },
];

const findBestEmployee = function (obj) {
  let maxTasks = 0;
  let bestEmployer = "";

  for (let { name, completeTasks } of obj) {
    if (completeTasks > maxTasks) {
      maxTasks = completeTasks;
      bestEmployer = name;
    }
  }
  return `${bestEmployer}: ${maxTasks}`;
};

console.log(findBestEmployee(employers));

// TASK 4

console.error("TASK 4");

const solary = [
  { name: "Bob", solary: [123, 110, 96, 56] },
  { name: "Sam", solary: [242, 32, 21, 35] },
];

const countTotalSolary = function (obj) {
  let totalSolary = 0;
  for (let person of obj) {
    totalSolary += person.solary.reduce((acc, solary) => {
      return acc + solary;
    }, 0);
  }
  return totalSolary;
};

console.log(countTotalSolary(solary));

// TASK 5

console.error("TASK 5");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

const getAllPropValues = (arr, prop) => {
  const values = [];
  for(let obj of arr) {
    if(prop in obj) {
      values.push(obj[prop]);
    }
  }
  return values;
};

console.log(getAllPropValues(products, "name"));

// TASK 6

console.error("TASK 6");

const calculateTotalPrice = (arr, productName) => {
  let totalPrice = 0;
  for(let { name, price, quantity } of arr) {
    if(name === productName) {
      totalPrice = price * quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, "Droid"));

// TASK 7

const account = {
  balance: 0,
  transaction_history: [],

  depositBalance(summa) {
    if (summa <= 0 || isNaN(summa)) {
      alert("Введіть коректну суму для поповнення.");
      return;
    }
    this.balance += summa;
    this.createTransaction("deposit", summa);
  },

  withdrawBalance(summa) {
    if (summa <= 0 || isNaN(summa)) {
      alert("Введіть коректну суму для зняття.");
      return;
    }
    if (this.balance < summa) {
      alert("Недостатньо коштів для зняття.");
      return;
    }
    this.balance -= summa;
    this.createTransaction("withdraw", summa);
  },

  createTransaction(type, summa) {
    const transaction = { type, amount: summa };
    this.transaction_history.push(transaction);
    updateUI();
    console.log(transaction);
  },
}

const updateUI = () => {
  const { balance, transaction_history } = account;
  document.getElementById("bankBalance").textContent = balance;

  const historyList = document.getElementById("transactionHistory");
  historyList.innerHTML = "";

  transaction_history.forEach(({ type, amount }) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${type === "deposit" ? "Поповнення" : "Зняття"}: ${amount}$`;
    historyList.appendChild(listItem);
  });
};

function deposit() {
  const input = document.getElementById("bankInput");
  const amount = parseFloat(input.value);
  account.depositBalance(amount);
  input.value = "";
}

function withdraw() {
  const input = document.getElementById("bankInput");
  const amount = parseFloat(input.value);
  account.withdrawBalance(amount);
  input.value = "";
}