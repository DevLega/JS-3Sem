const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    fragment.append(li);
});

list.append(fragment);