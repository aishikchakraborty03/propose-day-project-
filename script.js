const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const heartsContainer = document.querySelector('.hearts-container');

const secretCode = 'shrayase';
const nextPageUrl = 'main.html';

// Initial animations
gsap.from('.form-content', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'back.out(1.7)',
});

gsap.from('.animate-label', {
    duration: 0.8,
    x: -30,
    opacity: 0,
    delay: 0.3,
});

gsap.from('.animate-input', {
    duration: 0.8,
    x: 30,
    opacity: 0,
    delay: 0.5,
});

gsap.from('.animate-button', {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    delay: 0.7,
    ease: 'elastic.out(1, 0.3)',
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 300);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();
    
    if (userInput === secretCode) {
        // Success animation
        gsap.to('.form-content', {
            duration: 0.5,
            scale: 0.8,
            opacity: 0,
            ease: 'back.in(1.7)',
        });
        
        resultDiv.innerHTML = 'Baby';
        gsap.from(resultDiv, {
            duration: 1,
            scale: 2,
            opacity: 0,
            ease: 'elastic.out(1, 0.3)',
            onComplete: () => {
                setTimeout(() => {
                    window.location.href = nextPageUrl;
                }, 1000);
            }
        });
    } else {
        // Error animation
        gsap.to(form, {
            duration: 0.1,
            x: [-10, 10, -10, 10, 0],
            ease: 'none',
        });
        
        resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Sona';
        gsap.from(resultDiv, {
            duration: 0.5,
            y: -20,
            opacity: 0,
        });
    }
});