// ===== Dropdown Menu ===== //

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bi-x");
  navbar.classList.toggle("active");
};

// ===== Class Active ===== //

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ===== Sticy NavBar ===== //

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.screenY > 100);

  // ===== Remove icon and navbar when scroll ===== //

  menuIcon.classList.remove("bi-x");
  navbar.classList.remove("active");
};

// ===== Animation Scroll Reveal ==== //

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal("h3, p, .footer-iconTop", { origin: "right" });
ScrollReveal().reveal(".about-img, h1", { origin: "left" });
ScrollReveal().reveal(
  ".service-container, .project-container, .home-img, .skill-img, .btn",
  {
    origin: "bottom",
  }
);

// ===== Running Text Job ===== //
var typed = new Typed(".multi-text", {
  strings: ["Web Developer", "UI Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
