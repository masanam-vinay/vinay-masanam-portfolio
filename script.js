document.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".section, .experience-card, .project-card, .cert-card, .activity-list div, .profile-card"
  );

  // Add animation class
  animatedElements.forEach((element) => {
    element.classList.add("scroll-reveal");
  });

  // Observer watches elements while scrolling
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });
    },
    {
      threshold: 0.12
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });


  // Mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

});