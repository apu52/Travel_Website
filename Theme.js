// const themebtn = document.getElementById("toggle");

// themebtn.onclick = () => {
//   document.body.classList.toggle("dark-theme");

//   if (document.body.classList.contains("dark-theme")) {
//     themebtn.innerText = "Light Theme";
//     console.log("Dark theme");
//   } else {
//     themebtn.innerText = "Dark Theme";
//     console.log("Light theme");
//   }
// };
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.querySelector(".toggle-label");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeLabel.style.background = "#fff"; // Adjust color for the checked state as needed
    console.log("Dark theme");
  } else {
    themeLabel.style.background = "var(--primary-color)"; // Adjust color for the unchecked state as needed
    console.log("Light theme");
  }
});
