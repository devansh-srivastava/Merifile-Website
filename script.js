/* MeriFile - JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    // Select all chat bubble elements
    const bubbles = document.querySelectorAll('.bubble-left, .bubble-right');
    
    // Create observer to trigger animations when bubbles come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Pause animations initially and observe each bubble
    bubbles.forEach(bubble => {
        bubble.style.animationPlayState = 'paused';
        observer.observe(bubble);
    });
});
