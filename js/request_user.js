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
  let isAdmin;
  fetch('http://127.0.0.1:5000/users/me/', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    isAdmin = data.admin
  })
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

        if (isAdmin) {
          var username = document.createElement('p');
          username.textContent = "Пользователь: " + request.username;
          requestInfo.appendChild(username);
        }
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
        if (isAdmin) {
          var addResponseBtn = document.createElement('button');
          addResponseBtn.className = "button";
          addResponseBtn.textContent = 'Добавить ответ';
          addResponseBtn.id = 'buttonContainer';
          addResponseBtn.addEventListener('click', function() {
            addResponseForm(request.id, requestInfo);
          });
          requestInfo.appendChild(addResponseBtn);
}
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

function addResponseForm(requestId, requestInfo) {
  var responseFormWrapper = document.createElement('div');
  responseFormWrapper.className = 'response-form-wrapper';

  var responseForm = document.createElement('form');
  responseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var responseInput = responseForm.querySelector('#response-input');
    var response = responseInput.value;
    sendResponse(requestId, response);
    responseFormWrapper.remove();
  });

  var responseInput = document.createElement('input');
  responseInput.id = 'response-input';
  responseInput.type = 'text';
  responseInput.className = 'form-input';
  responseInput.placeholder = 'Введите ответ...';
  responseForm.appendChild(responseInput);

  var sendResponseBtn = document.createElement('button');
  sendResponseBtn.textContent = 'Отправить';
  sendResponseBtn.className = "button";
  responseForm.appendChild(sendResponseBtn);

  responseFormWrapper.appendChild(responseForm);
  requestInfo.appendChild(responseFormWrapper);
}

function sendResponse(requestId, response) {
  // Здесь вызываете ручку '/user_reqs/{id_request}/response/' с использованием Fetch API или другой подходящей библиотеки для сетевых запросов.
  // Пример использования Fetch API:
  var params = new URLSearchParams();
  params.append('response', response);
  fetch(`http://localhost:5000/user_reqs/${requestId}/response/?` + params.toString(), {
    method: 'PUT',
    // body: params.toString,
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
  .then(function(response) {
  })
  .catch(function(error) {
    // Обработка ошибки
  });
}
