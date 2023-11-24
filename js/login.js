function submitForm() {
    var formData = new FormData(document.getElementById('loginForm'));

    fetch('http://127.0.0.1:5000/token', {
        method: 'POST',
        body: formData
    })
    .then(response => {
      response.json()
      if (response.status == 200) {
        // Авторизация успешна, перенаправляем на главную страницу
        window.location.href = 'index.html';
      } else {
          // Ошибка авторизации, выводим сообщение
          document.getElementById('errorMessage').innerText = 'Неверный логин или пароль';
      }
    })
    .then(data => console.log(data))
    .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    });
}
