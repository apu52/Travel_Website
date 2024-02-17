document.addEventListener('DOMContentLoaded', () => {
  const starsContainers = document.getElementsByClassName("stars");
  const ratingTexts = document.querySelectorAll('[id$="-rating-text"]');
  let currentRating = 0;

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
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '★';
      star.setAttribute('data-rating', i);
      starsContainer.appendChild(star);

      star.addEventListener('click', () => {
        currentRating = i;
        updateRating(index);
        colourStar(i , starsContainer);
      });

    }
  });

  const updateRating = (index) => {
    ratingTexts[index].textContent = `Rating: ${currentRating}`;
  };
});


function submitFeedback() {
  var feedbackInput = document.getElementById("feedback-input");
  var feedback = feedbackInput.value.trim();

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
    }
  });

}