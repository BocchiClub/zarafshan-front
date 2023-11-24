document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored username from local storage
    var username = localStorage.getItem('username');
  
    // Update the text content of the login link with the username
    if (username) {
      document.getElementById('loginLink').textContent = username;
    }
  });