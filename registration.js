document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвратить перезагрузку страницы при отправке формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Сохраняем имя пользователя и пароль в localStorage (для примера)
        localStorage.setItem('username', username);  // Сохраняем имя пользователя
        localStorage.setItem('password', password);  // Сохраняем пароль

        // Переключаем видимость: скрываем форму регистрации, показываем выбор языка
        document.getElementById('registration-container').style.display = 'none';
        document.getElementById('selection-container').style.display = 'block';
    } else {
        alert("Lūdzu, aizpildiet visus laukus.");
    }
});
