var swiper = new Swiper('.swiper-container', {
  loop: true,
});


function goToNextSlide() {
  swiper.slideNext();
}

function goToPrevSlide() {
  swiper.slidePrev();
}

document.querySelector('.swiper-button-next').addEventListener('click', goToNextSlide);
document.querySelector('.swiper-button-prev').addEventListener('click', goToPrevSlide);
