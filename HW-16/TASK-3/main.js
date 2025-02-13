class Storage {
  constructor(arr) {
    this.arr = arr;
  }

  getItems() {
    return this.arr;
  };

  addItem(item) {
    this.arr.push(item);
  }

  removeItem(item) {
    for(let el of this.arr) {
      if(el == item) {
        this.arr.splice(this.arr.indexOf(item), 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.getItems()); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.getItems()); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]