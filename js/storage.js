function logout() {
  // Delete the user's authentication token (example: using localStorage)
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  document.getElementById('loginLink').textContent = 'Войти';
  // Redirect the user to the login page or any other desired page
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored username from local storage
  var username = localStorage.getItem('username');

  // Update the text content and href attribute of the login link with the username
  if (username) {
    document.getElementById('loginLink').textContent = username;
    document.getElementById('loginLink').href = 'personal.html';

    var listItem = document.createElement('li');
    var logoutButton = document.createElement('a');
    logoutButton.id = 'logoutButton';
    logoutButton.className = 'main-item';
    logoutButton.textContent = 'Выйти';
    logoutButton.addEventListener('click', logout);
    listItem.appendChild(logoutButton);
    document.getElementById('main-menu').appendChild(listItem);
  }
});