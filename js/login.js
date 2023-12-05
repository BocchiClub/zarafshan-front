function submitForm() {
  var formData = new FormData(document.getElementById('loginForm'));

  fetch('http://127.0.0.1:5000/token', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.status == 200) {

        var username = formData.get("username");

        localStorage.setItem('username', username);

        window.location.href = 'index.html';
      } else {
        document.getElementById('errorMessage').textContent = 'Неверный логин или пароль';
      }
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
    });
}

function signinForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("full_name").value;
  const password = document.getElementById("password").value;

  const userData = {
    username: username,
    email: email,
    full_name: fullName,
    password: password
  };

  fetch("http://127.0.0.1:5000/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status == 200) {
        window.location.href = 'index.html';

        localStorage.setItem('username', username);
      } else {
        document.getElementById('errorMessage').textContent = 'Пользователь с таким username уже существует';
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
    });
}
