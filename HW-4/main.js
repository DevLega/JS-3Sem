//

document.getElementById('checkText').addEventListener('click', function () {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let textResults = document.getElementById('textResults');

    textResults.textContent = input1 && input2 ? "Обидва поля заповнені" : "Не всі поля заповнені";
})

//

document.getElementById('checkNumbers').addEventListener('click', function () {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let summa = num1 + num2;
    let numResults = document.getElementById('numResults');

    numResults.textContent = summa > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10";
});

//

document.getElementById('checkInclude').addEventListener('click', function () {
    let includeResults = document.getElementById('includeResults');

    includeResults.textContent = document.getElementById('includeJava').value.toLowerCase().includes("javascript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript";
});

//

document.getElementById('numberNotBiggerOrSmallerCheck').addEventListener('click', function () {
    let numberNotBiggerOrSmaller = Number(document.getElementById('numberNotBiggerOrSmaller').value);
    let numberNotBiggerOrSmallerResults = document.getElementById('numberNotBiggerOrSmallerResults');

    numberNotBiggerOrSmallerResults.textContent = (numberNotBiggerOrSmaller >= 10 && numberNotBiggerOrSmaller <= 20) ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20";
});

//

document.getElementById('submitForm').addEventListener('click', function() {
    let FormName = document.getElementById('FormName').value;
    let FormEmail = document.getElementById('FormEmail').value;
    let FormPassword = document.getElementById('FormPassword').value;
    let FormWrong = document.getElementById('FormWrong');

    FormWrong.textContent = "";

    if(FormName.length < 3) {
        FormWrong.textContent += "Ім'я повинно містити не менше 3 символів. ";
    }

    if(!FormEmail.includes("@")) {
        FormWrong.textContent += "Email повинен містити символ @. ";
    }

    if(FormPassword.length < 6) {
        FormWrong.textContent += "Пароль повинен містити не менше 6 символів. "
    }

    if(FormWrong.textContent === "") {
        window.location.href = "http://127.0.0.1:5500/index.html"
    }
})