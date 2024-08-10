let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);




   window.addEventListener("scroll", function () {
     var header = document.querySelector("nav");
     header.classList.toggle("sticky", window.scrollY > 50)
   })
