function toggleHamburgerMenu() {
  const navbarNav = document.querySelector("#navbarNav");
  const navbatBtn = document.querySelector("#navbar-button");

  document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
    navbatBtn.classList.toggle("active");
  };
}

toggleHamburgerMenu();
