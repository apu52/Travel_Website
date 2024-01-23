document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const ratingText = document.getElementById('rating-text');
    let currentRating = 0;

    // Create 5 stars dynamically
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '★';
      star.setAttribute('data-rating', i);

      star.addEventListener('click', () => {
        currentRating = i;
        updateRating();
      });

      starsContainer.appendChild(star);
    }

    const updateRating = () => {
      ratingText.textContent = `Rating: ${currentRating}`;
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