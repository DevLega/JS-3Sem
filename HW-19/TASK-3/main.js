//    <form>
//       <p>Choose a color:</p>
//       <label>
//         <input type="radio" name="color" value="red" checked/>
//         Red
//       </label>
//       <label>
//         <input type="radio" name="color" value="white"/>
//         White
//       </label>
//       <label>
//         <input type="radio" name="color" value="green"/>
//         Green
//       </label>
//     </form>

const inputs = document.querySelectorAll('input');
const body = document.querySelector('body');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        body.style.backgroundColor = input.value;
    });
});