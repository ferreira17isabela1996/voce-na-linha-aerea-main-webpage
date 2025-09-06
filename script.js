const toggle = document.getElementById("menu-toogle-id");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    console.log("estou funcionando")
  navLinks.classList.toggle("show");
});

