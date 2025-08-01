if(window.innerWidth < 600){
    document.querySelector(".welcome").innerHTML= `
            <div class="welcome-text">
                <h1 class="welcome-text-title">به پورتفولیو من خوش آمدید</h1>
                <h2 class="welcome-text-subtitle">فرانت اند دولوپر</h2>
            </div>
            <div class="picture">
                <img src="./PictureWithoutBackground.PNG" alt="" class="image-prof">
            </div>
    `;
}
document.addEventListener(`DOMContentLoaded`, function() {
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


