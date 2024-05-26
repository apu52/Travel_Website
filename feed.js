document.addEventListener('DOMContentLoaded', () => {
    const ratingCategories = [
        'navigationEase',
        'bookingProcess',
        'accuracyInformation',
        'paymentOptions',
        'securityMeasures',
        'customerSupport',
        'overallExperience'
    ];

    ratingCategories.forEach(category => {
        const container = document.getElementById(category);
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('i');
            star.classList.add('fa', 'fa-star', 'star');
            star.dataset.rating = i;
            star.addEventListener('click', () => setRating(category, i));
            container.appendChild(star);
        }
    });
});

function setRating(category, rating) {
    const stars = document.querySelectorAll(`#${category} .star`);
    const ratingText = document.getElementById(`${category}-rating-text`);

    stars.forEach(star => {
        star.classList.toggle('checked', star.dataset.rating <= rating);
    });

    ratingText.textContent = `Rating: ${rating}`;
}

function submitFeedback() {
    const feedback = {
        event_name: document.getElementById('event_name').value,
        event_date: document.getElementById('event_date').value,
        FullName: document.getElementById('FullName').value,
        Email: document.getElementById('Email').value,
        navigationEase: document.querySelectorAll('#navigationEase .star.checked').length,
        bookingProcess: document.querySelectorAll('#bookingProcess .star.checked').length,
        accuracyInformation: document.querySelectorAll('#accuracyInformation .star.checked').length,
        paymentOptions: document.querySelectorAll('#paymentOptions .star.checked').length,
        securityMeasures: document.querySelectorAll('#securityMeasures .star.checked').length,
        customerSupport: document.querySelectorAll('#customerSupport .star.checked').length,
        overallExperience: document.querySelectorAll('#overallExperience .star.checked').length,
        suggestions: document.getElementById('suggestions').value,
        notify_future_events: document.getElementById('notify_future_events').checked,
        can_follow_up: document.getElementById('can_follow_up').checked
    };
    Swal.fire({
        title: 'Thank you!',
        text: 'Your feedback has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

