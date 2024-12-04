//1 TASK
console.error("1 TASK");

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let stringFor = "";

for (const friend of friends) {
  stringFor += friend + ", ";
}

stringFor = stringFor.slice(0, -2);

let stringJoin = friends.join(", ");

console.log(stringJoin);
console.log(stringFor);

//2 TASK

console.error("2 TASK");


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const cardToRemove = "Карточка-3";
const cardToInsert = "Карточка-6";
const cardToUpdate = "Карточка-4";

for(let i = 0; i < cards.length; i++) {
    if(cards[i] === cardToRemove) {
        cards.splice(i, 1);
    }

}

cards[5] = cardToInsert;
cards[0] = cardToUpdate;

console.log(cards);