const ratings = [];
document.addEventListener('DOMContentLoaded', () => {
  const starsContainers = document.getElementsByClassName("stars");
  const ratingTexts = document.querySelectorAll('[id$="-rating-text"]');
  //let currentRating = 0;

  function colourStar(ind , container) {

    let s = container.querySelectorAll("span");
    s = Array.from(s);
    // remove existing rating
    for(let i = 0; i < s.length; i++) {
      s[i].style.color = "white";
    }

    for(let i = 0; i < ind; i++) {
      s[i].style.color = "#FFA500";
    }
    // console.log(container);
  }

  // Create 5 stars dynamically for each stars container
  Array.from(starsContainers).forEach((starsContainer, index) => {
    ratings[index] = 0;
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '★';
      star.setAttribute('data-rating', i);
      starsContainer.appendChild(star);

      star.addEventListener('click', () => {
        ratings[index] = i;
        updateRating(index);
        colourStar(i , starsContainer);
      });

    }
  });

  const updateRating = (index) => {
    ratingTexts[index].textContent = `Rating: ${ratings[index]}`;
  };

function resetStars() {
    Array.from(starsContainers).forEach((starsContainer, index) => {
      ratings[index] = 0; 
      colourStar(0, starsContainer); 
      const ratingText = document.getElementById(starsContainer.id.replace("-stars-container", "-rating-text"));
      if (ratingText) {
        ratingText.textContent = "Rating: 0";
      }
    });
  }

window.submitFeedback = function submitFeedback() {
  var feedbackInput = document.getElementById("feedback-input");
  var feedback = feedbackInput.value.trim();
  
  // Check if any rating is zero
    if (ratings.some(rating => rating === 0)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a non-zero rating for all categories before submitting.',
      });
      return; // Exit the function if any rating is zero
    }
  
  // Check if the feedback is empty
  if (feedback === "") {
    // Show a SweetAlert error modal
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter your feedback before submitting.',
    });
    return; // Exit the function if feedback is empty
  }

  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your response has been recorded.',
  }).then((result) => {
    // Clear the feedback input box after the user acknowledges the success modal
    if (result.isConfirmed || result.isDismissed) {
      feedbackInput.value = "";
      resetStars();
    }
  });
};
});
