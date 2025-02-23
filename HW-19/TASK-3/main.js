const inputs = document.querySelectorAll('input');
const body = document.querySelector('body');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        body.style.backgroundColor = input.value;
    });
});