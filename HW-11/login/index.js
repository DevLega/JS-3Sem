const usersDataBase = 
[
    {username: "lega", password: '12345'},
    {username: "chillguy", password: '12345'},
    {username: "superman", password: '12345'}
]

const checkUser = function(username, password) {
    const user = usersDataBase.find(user => user.username === username);

    if(user && user.password === password) {
        return true;
    }

    return false;
}

document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
        console.log("Введіть пароль або нікнейм");
    } else if (checkUser(username, password)) {
        console.log("Успішний вхід");
        location.replace("../index.html");
    } else {
        console.log("Невірне ім'я користувача або пароль");
    }
    
})