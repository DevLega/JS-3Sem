const button = document.querySelector('.js-button');

button.addEventListener('click', () => {
    const input = document.querySelector('.js-input');
    if(input.value == "") {
        return;
    }

    button.textContent = input.value

    return;
})