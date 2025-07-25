// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("form");
//   const emailInput = form.querySelector("#email");
//   const passwordInput = form.querySelector("#password");
//   const emailError = form.querySelector("#emailError");
//   const passwordError = form.querySelector("#passwordError");
//   const eye = form.querySelector("#eye");

//   function showError(inputElement, errorElement, message) {
//     inputElement.parentElement.classList.add("invalid");
//     errorElement.textContent = message;
//     errorElement.style.display = "block";
//   }

//   function hideError(inputElement, errorElement) {
//     inputElement.parentElement.classList.remove("invalid");
//     errorElement.textContent = "";
//     errorElement.style.display = "none";
//   }

//   function validateEmail() {
//     const emailValue = emailInput.value.trim();
//     const emailPattern = /^[A-Za-z][\w.-]*@\S+\.\S+$/;

//     if (emailValue === "") {
//       showError(emailInput, emailError, "Email tidak boleh kosong.");
//       return false;
//     } else if (!emailPattern.test(emailValue)) {
//       showError(
//         emailInput,
//         emailError,
//         "Email harus diisi dengan format yang benar (contoh: user@domain.com)."
//       );
//       return false;
//     } else {
//       hideError(emailInput, emailError);
//       return true;
//     }
//   }

//   function validatePassword() {
//     const passwordValue = passwordInput.value.trim();
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

//     if (passwordValue === "") {
//       showError(passwordInput, passwordError, "Password tidak boleh kosong.");
//       return false;
//     } else if (!passwordPattern.test(passwordValue)) {
//       showError(
//         passwordInput,
//         passwordError,
//         "Password minimal 8 karakter, mengandung 1 huruf kecil, dan 1 huruf besar."
//       );
//       return false;
//     } else {
//       hideError(passwordInput, passwordError);
//       return true;
//     }
//   }

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const isEmailValid = validateEmail();
//     const isPasswordValid = validatePassword();

//     if (isEmailValid && isPasswordValid) {
//       alert("Form submitted successfully!");
//       console.log("Email:", emailInput.value);
//       console.log("Password:", passwordInput.value);

//       window.location.href = "/index.html";
//     }
//   });

//   emailInput.addEventListener("input", validateEmail);
//   passwordInput.addEventListener("input", validatePassword);

//   const password = document.getElementById("password");
//   const togglePasswordButton = document.querySelector(".toggle-password");

//   if (togglePasswordButton) {
//     togglePasswordButton.addEventListener("click", () => {
//       const inputType = password.getAttribute("type");

//       if (inputType === "password") {
//         password.setAttribute("type", "text");
//       } else {
//         password.setAttribute("type", "password");
//       }
//     });
//   }
// });

// // document.addEventListener("DOMContentLoaded", function () {
// //   const form = document.querySelector("form");
// //   const emailInput = form.querySelector("#email");
// //   const passwordInput = form.querySelector("#password");
// //   const emailError = form.querySelector("#emailError");

// //   function showError(inputElement, errorElement, message) {
// //     inputElement.par;
// //   }
// // });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = form.querySelector("#email");
  const passwordInput = form.querySelector("#password");
  const emailError = form.querySelector("#emailError");
  const passwordError = form.querySelector("#passwordError");
  const eye = form.querySelector("#eye");

  function showError(inputElement, errorElement, message) {
    inputElement.parentElement.classList.add("invalid");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function hideError(inputElement, errorElement) {
    inputElement.parentElement.classList.remove("invalid");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[A-Za-z][\w.-]*@\S+\.\S+$/;

    if (emailValue === "") {
      showError(emailInput, emailError, "Email tidak boleh kosong.");
      return false;
    } else if (!emailPattern.test(emailValue)) {
      showError(
        emailInput,
        emailError,
        "Email harus diisi dengan format yang benar (contoh: user@domain.com)."
      );
      return false;
    } else {
      hideError(emailInput, emailError);
      return true;
    }
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

    if (passwordValue === "") {
      showError(passwordInput, passwordError, "Password tidak boleh kosong.");
      return false;
    } else if (!passwordPattern.test(passwordValue)) {
      showError(
        passwordInput,
        passwordError,
        "Password minimal 8 karakter, mengandung 1 huruf kecil, dan 1 huruf besar."
      );
      return false;
    } else {
      hideError(passwordInput, passwordError);
      return true;
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // Ambil data user dari localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === emailInput.value &&
        storedUser.password === passwordInput.value
      ) {
        alert("Login berhasil!");
        window.location.href = "/index.html";
      } else {
        alert("Email atau password salah. Coba lagi ya.");
      }
    }
  });

  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  const password = document.getElementById("password");
  const togglePasswordButton = document.querySelector(".toggle-password");

  if (togglePasswordButton) {
    togglePasswordButton.addEventListener("click", () => {
      const inputType = password.getAttribute("type");

      password.setAttribute(
        "type",
        inputType === "password" ? "text" : "password"
      );
    });
  }
});
