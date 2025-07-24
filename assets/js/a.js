document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("#email");
  const passwordInput = form.querySelector("#password");
  const emailError = form.querySelector("#emailError");
  const passwordError = form.querySelector("#passwordError");

  function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}%/;
    if (!emailInput.value.macth(emailPattern)) {
      return emailError.classList.add("error");
    }
    emailError.classList.remove("error");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateEmail();
  });

  const password = document.getElementById("password");
  const togglePasswordButton = document.querySelector(".toggle-password");

  togglePasswordButton.addEventListener("click", () => {
    const inputType = password.getAttribute("type");

    if (inputType === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  });
});
