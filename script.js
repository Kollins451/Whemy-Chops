const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  window.addEventListener("resize", () => {

    if (window.innerWidth > 950) {

      nav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* ================= FOOTER YEAR ================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ================= HEADER SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 30) {

    header.style.background = "rgba(9, 9, 9, 0.95)";

  } else {

    header.style.background = "rgba(9, 9, 9, 0.72)";

  }

});
