const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.querySelector('.success-message');
const container = document.querySelector('.container');

let noClickCount = 0;
const maxClicks = 6;

// Show No button
function showNoButton() {
    if (noClickCount === 0) {
        noBtn.style.display = 'block';
        positionNoButton();
    }
}

yesBtn.addEventListener('mouseenter', showNoButton);
yesBtn.addEventListener('click', function() {
    // Yes button clicked
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    container.querySelector('.question').style.display = 'none';
    container.querySelector('.emoji').style.display = 'none';
    container.querySelectorAll('.emoji')[1].style.display = 'none';
    
    successMessage.style.display = 'block';
    
    createConfetti();
    
    // Redirect to index.html after 2 seconds
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    noClickCount++;
    
    // Reduce size
    const newSize = 120 - (noClickCount * 15);
    noBtn.style.padding = Math.max(10, 15 - noClickCount * 2) + 'px ' + Math.max(20, 40 - noClickCount * 5) + 'px';
    noBtn.style.fontSize = Math.max(0.6, 1.2 - noClickCount * 0.15) + 'em';
    
    positionNoButton();
    
    // After max clicks, hide the No button
    if (noClickCount >= maxClicks) {
        noBtn.style.display = 'none';
    }
});

function positionNoButton() {
    // Random position
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function createConfetti() {
    const confettiPieces = ['🎉', '❤️', '💕', '✨', '🌹'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-50px';
        confetti.style.opacity = '1';
        
        document.body.appendChild(confetti);
        
        // Animation
        let pos = -50;
        const speed = Math.random() * 3 + 2;
        const drift = (Math.random() - 0.5) * 200;
        
        const interval = setInterval(() => {
            pos += speed;
            confetti.style.top = pos + 'px';
            confetti.style.left = (parseFloat(confetti.style.left) + drift / 100) + 'px';
            
            if (pos > window.innerHeight) {
                clearInterval(interval);
                confetti.remove();
            }
        }, 20);
    }
}