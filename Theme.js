// const themebtn = document.getElementById("toggle");

// themebtn.onclick = () => {
//   document.body.classList.toggle("dark-theme");

//   if (document.body.classList.contains("dark-theme")) {
//     themebtn.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
//     console.log("Dark theme");
//   } else {
//     themebtn.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
//     console.log("Light theme");
//   }
// };


const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.querySelector(".toggle-label");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeLabel.style.background = "var(--primary-color)";
    themeToggle.checked = true;
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    themeLabel.style.background = "#fff";
    themeToggle.checked = false; 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; 
  applyTheme(savedTheme);
});

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  localStorage.setItem("theme", theme); 
  applyTheme(theme);
});

