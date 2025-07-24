function toggleHamburgerMenu() {
  const navbarNav = document.querySelector("#navbarNav");
  const navbarBtn = document.querySelector("#navbar-button");
  const hamburger = document.querySelector("#hamburger-menu");

  hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
    navbarBtn.classList.toggle("active");
  });
}

function renderNavbarUserState() {
  const user = JSON.parse(localStorage.getItem("user"));
  const authButtons = document.querySelector(".auth-buttons");
  const userProfile = document.querySelector(".user-profile");
  const userAvatar = document.getElementById("userAvatar");

  if (user) {
    authButtons.style.display = "none";
    userProfile.style.display = "inline-block";

    userAvatar.src = user.avatar || "assets/img/navbar-profile.svg";
  } else {
    authButtons.style.display = "flex";
    userProfile.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("user");
  alert("Logout berhasil!");
  window.location.href = "sign-in.html";
}

document.addEventListener("DOMContentLoaded", () => {
  toggleHamburgerMenu();
  renderNavbarUserState();
});
