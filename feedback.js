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