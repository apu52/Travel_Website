const themebtn = document.getElementById("toggle");

themebtn.onclick = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themebtn.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
    console.log("Dark theme");
  } else {
    themebtn.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
    console.log("Light theme");
  }
};
