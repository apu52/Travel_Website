const panels = document.querySelectorAll(".card");

panels.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses(); // Add fuctions to remove active class first
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((card) => {
    card.classList.remove("active");
  });
}
