//1 TASK
console.error("1 TASK");
let Massive1 = [1, 2, 3];

Massive1[1] = 10
console.log(Massive1);

//2 TASK
console.error("2 TASK");
let Massive2 = ["a", "b", "c"]

Massive2[3] = "d"
console.log(Massive2);

//3 TASK
console.error("3 TASK");
let Massive3 = [5, 342, 32, 2];
let summa3 = 0;

for(let number3 of Massive3) {
  summa3 += number3
}
console.log(summa3);

//4 TASK
console.error("4 TASK");
let Massive4 = [3, 43, 21, 26, 45]

for(let count4 of Massive4) {
  console.log(count4);
}

//5 TASK
console.error("5 TASK");
let Massive5 = ["asdgs", "dfbgf", "bgfmj", "saxvf", "asdty"]

for(let count5 of Massive5) {
  console.log(count5);
}

//6 TASK
console.error("6 TASK");
let Massive6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max6 = Massive6[0];

for(let count6 of Massive6) {
  if(count6 > max6) {
    max6 = count6
  }
}
console.log(max6);

//7 TASK
console.error("7 TASK");
let Massive7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let count7 of Massive7) {
  if(count7%2 != 0) continue;
  console.log(count7);
}