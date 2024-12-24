const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navLinks');
const dropdownToggles = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    console.log("toggle clicked")
    navLinks.classList.toggle('active'); // Toggles the 'active' class
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 50)
})
