/* =========================================
   CHOPS BY WHEMY
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");

  });


  /* Close menu after clicking a link */

  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      menuToggle.classList.remove("active");

      navLinks.classList.remove("active");

      document.body.classList.remove("menu-open");

    });

  });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   NAVBAR BACKGROUND ON SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {

    header.style.background = "rgba(7, 7, 7, 0.96)";

  } else {

    header.style.background = "rgba(9, 9, 9, 0.88)";

  }

});


/* =========================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================= */

window.addEventListener("resize", () => {

  if (window.innerWidth > 700) {

    menuToggle?.classList.remove("active");

    navLinks?.classList.remove("active");

    document.body.classList.remove("menu-open");

  }

});