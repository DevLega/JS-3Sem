const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    nameOutput.textContent = value;
});

//

const validInput = document.getElementById('validation-input');

validInput.addEventListener('focusout', () => {
    const length = validInput.value.length;
    const correctLength = validInput.getAttribute('data-length');

    if(length < correctLength) {
        validInput.classList.remove("valid")
        validInput.classList.add("invalid")
    } else if(length >= correctLength) {
        validInput.classList.remove("invalid")
        validInput.classList.add("valid")
    }
})