document.addEventListener("DOMContentLoaded", () => {
  const ratingCategories = [
    "navigationEase",
    "bookingProcess",
    "accuracyInformation",
    "paymentOptions",
    "securityMeasures",
    "customerSupport",
    "overallExperience",
  ];

  ratingCategories.forEach((category) => {
    const container = document.getElementById(category);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa", "fa-star", "star");
      star.dataset.rating = i;
      star.addEventListener("click", () => setRating(category, i));
      container.appendChild(star);
    }
  });
});

function setRating(category, rating) {
  const stars = document.querySelectorAll(`#${category} .star`);
  const ratingText = document.getElementById(`${category}-rating-text`);

  stars.forEach((star) => {
    star.classList.toggle("checked", star.dataset.rating <= rating);
  });

  ratingText.textContent = `Rating: ${rating}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const eventName = document.getElementById("event_name").value.trim();
    const eventDate = document.getElementById("event_date").value;
    const fullName = document.getElementById("FullName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    // Check if the feedback is empty
    if (comments === "" || comments.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your feedback before submitting.",
        customClass: {
          popup: "swal-popup",
          title: "swal-title",
          content: "swal-content",
          confirmButton: "swal-confirm-button",
        },
      });
      return; // Exit the function if feedback is empty
    }

    // Show a success message
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your response has been recorded.",
      customClass: {
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
        confirmButton: "swal-confirm-button",
      },
    }).then((result) => {
      // Clear the feedback form after the user acknowledges the success modal
      if (result.isConfirmed || result.isDismissed) {
        form.reset();

      // Reset star ratings
        const ratingCategories = [
          "navigationEase",
          "bookingProcess",
          "accuracyInformation",
          "paymentOptions",
          "securityMeasures",
          "customerSupport",
          "overallExperience",
        ];

        ratingCategories.forEach((category) => {
          const stars = document.querySelectorAll(`#${category} .star`);
          stars.forEach((star) => {
            star.classList.remove("checked");
          });
          const ratingText = document.getElementById(`${category}-rating-text`);
          ratingText.textContent = `Rating: 0`;
        });
      }
    });
  });
});
