function register() {
  var username = document.getElementById('username_input').value;
  var passcode = document.getElementById('passcode_input').value;
  var registerContainer = document.getElementsByClassName('center')[0];
  localStorage.setItem('username', username);
  localStorage.setItem('passcode', passcode);

  // Delete everything in the div register-container
  registerContainer.innerHTML = '';

  // Create a gif
  var image = document.createElement('img');
  image.src = './js/complete.gif';
  registerContainer.appendChild(image);
  image.delay = 70;
  image.style.borderRadius = '15px';

  // Wait 3 seconds
  setTimeout(function() {
    // Fire the redirect function
    redirect('./calc.html');
  }, 3000);
}
          
function redirect(url) {
    window.location.href = "./redirect.html#" + url
}