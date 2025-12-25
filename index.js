const sections = document.querySelectorAll(".page-section");
const skillCards = document.querySelectorAll(".skill-card");
const navLinks = document.querySelectorAll("nav a");

/* ===== Intersection Observer ===== */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // 👈 QUAN TRỌNG
      }
    });
  },
  {
    threshold: 0.25,
  }
);

sections.forEach(section => observer.observe(section));
skillCards.forEach(card => observer.observe(card));

/* ===== ACTIVE MENU ===== */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
