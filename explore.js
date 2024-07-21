let lastClickedCard = document.querySelector(".active");

// Function to handle click events
function handleClick(card) {
  // Remove active classes from all cards
  const panels = document.querySelectorAll(".card");
  panels.forEach(panel => panel.classList.remove("active"));

  // Add active class to the clicked card
  card.classList.add("active");
  lastClickedCard = card; // Update the reference to the last clicked card
}

// Attach click event listener to all cards
const panels = document.querySelectorAll(".card");
panels.forEach(panel => panel.addEventListener("click", () => handleClick(panel)));

// Adjust the mouseover event listener
panels.forEach(panel => {
  panel.addEventListener('mouseover', () => {
      lastClickedCard.classList.remove("active");
      panel.classList.add('active');
  });
  panel.addEventListener('mouseout', () => {
    panel.classList.remove('active');
    lastClickedCard.classList.add("active");
});
});
