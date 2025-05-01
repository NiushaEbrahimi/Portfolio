

document.addEventListener("DOMContentLoaded", function () {
    const element = document.querySelector('.welcome-text-subtitle');
    if (!element) return;

    const originalText = element.innerHTML;
    element.innerHTML = '';

    let index = 0;
    const typingSpeed = 150;

    function startTypingEffect() {
        const typingInterval = setInterval(() => {
            if (index < originalText.length) {
                element.innerHTML += originalText[index];
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTypingEffect();
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    observer.observe(element);
});





