// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark and light theme switcher
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("resume-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const activeTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("resume-theme", activeTheme);
});

// Scroll reveal animation and animated skill bars
const revealItems = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress span");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        entry.target.style.width = `${width}%`;
      }
    });
  },
  { threshold: 0.5 }
);

progressBars.forEach((bar) => progressObserver.observe(bar));
