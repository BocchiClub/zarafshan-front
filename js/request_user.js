function sendrequest() {
  const message = document.getElementById("message").value;
  const username = localStorage.getItem('username');

  const userData = {
    message: message,
    username: username
  };

  fetch('http://127.0.0.1:5000/user_reqs/items/create', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status == 201) {
        alert('Обращение успешно создано!');
      } else {
        alert('Ошибка при создании обращения');
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
    });
}