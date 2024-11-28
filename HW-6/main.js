
//1 TASK
console.error("1 TASK");
let count1 = 0;

while(count1 < 10) {
  count1++;
  console.log(count1);
}

//2 TASK
console.error("2 TASK");
for(let i = 2; i<=20; i++) {
  if(i%2 != 0) continue;
  console.log(i);
}

//3 TASK
console.error("3 TASK");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//4 TASK
console.error("4 TASK");
let numbers4 = [1, 2, 3, 4, 5];
let count4 = 0;

while(count4 < numbers4.length) {
  console.log(numbers4[count4]);
  count4++
}

//5 TASK
console.error("5 TASK");
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let count5 of numbers5) {
  if(count5 === 7) break;
  console.log(count5);
}

//6 TASK
console.error("6 TASK");
let n = 8;
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let count6 of numbers6) {
  if (count6 >= n) break;
  console.log(count6);
}

//7 TASK
console.error("7 TASK");
let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
