document.addEventListener('mousemove', function(event) {
    const ripple = document.createElement('div');
    const element = document.getElementById('top');

    let x = event.clientX;
    let y = event.clientY;
    let scrollLeft = window.pageXOffset;
    let scrollTop = window.pageYOffset;
    ripple.className = 'ripple';
    let relativeX = x + scrollLeft;
    let relativeY = y + scrollTop;
    ripple.style.left = `${relativeX  - 5}px`;
    ripple.style.top = `${relativeY - 5}px`;
    
    document.body.appendChild(ripple);


    // Trigger the animation by adding the class after a short delay
    setTimeout(() => {
        ripple.classList.add('ripple-active');
    }, 10);

    // Remove the ripple element after the animation ends
    ripple.addEventListener('transitionend', () => {
        ripple.remove();
    });
});
