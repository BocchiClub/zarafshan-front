function sendrequest() {
  const message = document.getElementById("message").value;
  const username = localStorage.getItem('username');

  const userData = {
    message: message,
    username: username
  };

  fetch('http://127.0.0.1:5000/user_reqs/create', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.status == 200) {
        alert('Обращение успешно создано!');
      } else {
        alert('Ошибка при создании обращения');
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
    });
}

function getRequests() {
  fetch('http://127.0.0.1:5000/users/me/items', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.status == 200) {
        return response.json()
      } else {
        throw new Error("Ошибка при получении реквестов: " + response.status);
      }
    })
    .then(function (requests) {
      var pageWrapper = document.querySelector('.request-wrapper');
      var requestsDiv = document.createElement('div');
      requestsDiv.id = 'requests';

      requests.forEach(function (request) {
        var requestInfo = document.createElement('div');
        requestInfo.className = 'request-info';

        var message = document.createElement('p');
        message.textContent = "Сообщение: " + request.message;
        requestInfo.appendChild(message);

        var date = document.createElement('p');
        var requestDate = new Date(request.date);
        var formattedDate = requestDate.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        date.textContent = "Дата: " + formattedDate;
        requestInfo.appendChild(date);

        var status = document.createElement('p');
        status.textContent = "Статус: " + request.status;
        requestInfo.appendChild(status);

        var response = document.createElement('p');
        response.textContent = "Ответ: " + request.response;
        requestInfo.appendChild(response);

        requestsDiv.appendChild(requestInfo);
      });

      pageWrapper.appendChild(requestsDiv);
    })
    .catch(function (error) {
      console.error("Ошибка при получении реквестов:", error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  getRequests();
});


