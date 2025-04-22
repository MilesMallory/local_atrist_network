// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  if (toggle) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // Collapsible Sections
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Scroll Animations
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
