function submitForm() {
    var formData = new FormData(document.getElementById('loginForm'));

    fetch('http://127.0.0.1:5000/token', {
        method: 'POST',
        body: formData
    })
    .then(response => {
      if (response.status == 200) {
        // Successful authorization
    
        // Get the username value from the response
        var username = formData.get("username");
    
        // Store the username in local storage
        localStorage.setItem('username', username);
        // console.log(username);
        // Redirect to the main page
        window.location.href = 'index.html';
      } else {
        // Authorization error, display a message
        document.getElementById('errorMessage').textContent = 'Неверный логин или пароль';
      }
    })
    .then(data => console.log(data))
    .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    });
}
