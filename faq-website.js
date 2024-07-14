const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Highlight active navbar
  const navLinks = document.querySelectorAll(".navLinks a");

  function highlightNavLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      // Adjust this value to control when the link should be highlighted
      const offsetPercentage = 20;

      if (
        section.offsetTop - window.innerHeight * (offsetPercentage / 100) <=
          scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  document.addEventListener("scroll", highlightNavLink);
  window.addEventListener("resize", highlightNavLink);

  // Initialize AOS library
  AOS.init();

  // Set animation delays for FAQs
  const faqs = document.querySelectorAll(".faq");
  faqs.forEach((faq, index) => {
    faq.style.animationDelay = `${index * 0.2}s`;
  });
});

// Logout Button
document.addEventListener("DOMContentLoaded", function () {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var loginButton = document.getElementById("btn-style");
  var logoutButton = document.getElementById("logout-btn");

  if (isLoggedIn === "true") {
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    loginButton.disabled = true;
    logoutButton.disabled = false;
    logoutButton.style.cursor = "pointer";
    logoutButton.addEventListener("click", function () {
      localStorage.setItem("isLoggedIn", "false");
      window.location.href = "./index.html";
    });
  } else {
    loginButton.style.display = "block";
    logoutButton.disabled = true;
  }
});

function sendEmail() {
  window.location.href = "mailto:arpanchowdhury003@gmail.com";
}
