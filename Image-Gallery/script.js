const imageContainerE1 = document.querySelector(".image-container");

const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x = 0;
let timer;

function onPrevButtonClick() {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
}

function onNextButtonClick() {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
}

prevE1.addEventListener("click", onPrevButtonClick);
nextE1.addEventListener("click", onNextButtonClick);

function handleKeyDown(event) {
  switch(event.key) {
    case 'ArrowLeft':
      // Simulate a click on the Prev button
      onPrevButtonClick();
      break;
    case 'ArrowRight':
      // Simulate a click on the Next button
      onNextButtonClick();
      break;
  }
}

document.addEventListener('keydown', handleKeyDown);

function updateGallery() {
  imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
