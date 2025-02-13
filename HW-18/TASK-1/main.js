const list = document.getElementById('categories');

const categories = list.querySelectorAll('ul').length;
console.log(`У списку ${categories} категорії.`);

list.querySelectorAll('ul').forEach((list) => {
    const title = list.previousElementSibling.textContent;
    const size = list.querySelectorAll('li').length;
    console.log(`Категорія: ${title}\nКількість елементів: ${size}`);
});

