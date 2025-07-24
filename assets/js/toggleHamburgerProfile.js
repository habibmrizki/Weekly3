function toggleHamburgerMenu() {
  const navbarLink = document.querySelector("#navbarLink");
  const navbatBtn = document.querySelector("#navbar-button");

  document.querySelector("#hamburger-menu").onclick = () => {
    navbarLink.classList.toggle("active");
    navbatBtn.classList.toggle("active");
  };
}

toggleHamburgerMenu();
