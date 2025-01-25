// TASK 1

const user = {
  hobby: "swimming",
  premium: true,
};

user.mood = "happy";
user.premium = false;

const keys = Object.keys(user);
for (let el of keys) {
  console.log(`${el}: ${user[el]}`);
}

// TASK 2

console.error("TASK 2");

const countProps = function (obj) {
  let props = 0;
  let propsObject = Object.keys(obj);
  for (let el of propsObject) {
    props++;
  }

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

  for (let employee of obj) {
    if (employee.completeTasks > maxTasks) {
      maxTasks = employee.completeTasks;
      bestEmployer = employee.name;
    }
  }
  return bestEmployer + ": " + maxTasks;
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
  for(let product of arr) {
    if(product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, "Droid"));