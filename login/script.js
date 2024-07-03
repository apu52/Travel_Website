document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.add("right-panel-active");
    registerForm.scrollIntoView({ behavior: "smooth" });
  });
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.remove("right-panel-active");
    loginForm.scrollIntoView({ behavior: "smooth" });
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
 loginButton.addEventListener("click", () => {
   container.classList.remove("right-panel-active");
 });

 function togglePasswordVisibility(buttonId, inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);
  const icon = document.getElementById(iconId);

  toggleButton.addEventListener('click', function (e) {
      // Toggle the type attribute
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Toggle the icon
      if (type === 'password') {
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
      } else {
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
      }
  });
}

// Apply the function to both login and register sections
togglePasswordVisibility('toggleLoginPassword', 'loginPassword', 'loginIcon');
togglePasswordVisibility('toggleRegisterPassword', 'registerPassword', 'registerIcon');
togglePasswordVisibility('toggleConfirmPassword', 'confirmPassword', 'confirmIcon');

    //registration success
    document.getElementById("registerMessage").style.display = "block";
    setTimeout(() => {
      container.classList.remove("right-panel-active");
      loginForm.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();


    //  login success
    alert("Login successful!");
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1000); 
  });
});