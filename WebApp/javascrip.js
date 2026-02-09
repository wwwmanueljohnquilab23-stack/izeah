const letters = [
    "This moment captured a smile that lights up my world. Every time I see this, I remember why I'm so lucky to have you.",
    "These memories with you are my favorite chapters. Thank you for filling my life with joy and laughter.",
    "You make every ordinary moment extraordinary. This is just one of countless memories I cherish with you.",
    "In this moment, I fell for you all over again. Your presence makes everything better.",
    "This memory reminds me that the best adventures are the ones I share with you.",
    "You are my favorite person to create memories with. Each moment with you is a treasure.",
    "This picture speaks a thousand words, but none could describe how much you mean to me.",
    "Every memory with you is a piece of my heart. Thank you for being absolutely amazing.",
    "This moment captures something special - a time when it was just us, and everything felt perfect.",
    "You make my heart smile. This memory is proof of the happiness you bring into my life.",
    "This is one of my favorite memories because you're in it. You make everything more beautiful.",
    "Forever grateful for moments like this with you. You are my greatest blessing. Happy Valentine's Day! ❤️"
];

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        showLetter(index);
    });
    item.style.cursor = 'pointer';
});

function showLetter(index) {
    const modal = document.getElementById('letterModal');
    const letterContent = document.getElementById('letterContent');
    const letterText = document.getElementById('letterText');
    
    letterText.textContent = letters[index];
    modal.style.display = 'flex';
}

function closeLetter() {
    const modal = document.getElementById('letterModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it //
window.addEventListener('click', function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        closeLetter();
    }
});

// Close modal with Escape key //
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLetter();
    }
});
