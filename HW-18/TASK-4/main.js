const counterSpan = document.getElementById('value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

incrementBtn.addEventListener('click', () => increment(1));
decrementBtn.addEventListener('click', () => decrement(1));

const increment = (value) => {
    counterValue += value;
    executeUpdate()    
}

const decrement = (value) => {
    counterValue -= value;
    executeUpdate()
}

const executeUpdate = () => {
    counterSpan.textContent = counterValue;
}