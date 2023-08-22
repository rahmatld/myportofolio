// toggle dan responsive
const navslide = () => {
  const burger = document.querySelector(".burger");
  const navlists = document.querySelector("nav"); // Menggunakan '.nav ul' untuk memilih elemen ul dalam nav

  burger.addEventListener("click", () => {
    navlists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navslide();

// Clear form on before unload==========================
window.onbeforeunload = () => {
  const forms = document.getElementsByTagName("form");
  for (const form of forms) {
    form.reset();
  }
};
