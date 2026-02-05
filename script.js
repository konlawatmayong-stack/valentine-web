// Love Button Interaction
const loveBtn = document.getElementById('loveBtn');

loveBtn.addEventListener('click', function() {
    // Create floating hearts effect
    createFloatingHearts();
    
    // Button animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Show love message
    showLoveMessage();
});

function createFloatingHearts() {
    const colors = ['#ff6b9d', '#ffc3a0', '#ff8fab', '#ffb3c1', '#ff6f91'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `floatUp ${Math.random() * 2 + 3}s ease-out forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

function showLoveMessage() {
    const messages = [
        '💕 Love is in the air!',
        '❤️ Sending you love!',
        '💖 Happy Valentine\'s Day!',
        '💗 You are loved!',
        '💝 Love always wins!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.textContent = randomMessage;
    messageEl.style.position = 'fixed';
    messageEl.style.top = '50%';
    messageEl.style.left = '50%';
    messageEl.style.transform = 'translate(-50%, -50%) scale(0)';
    messageEl.style.fontSize = '2.5rem';
    messageEl.style.fontWeight = 'bold';
    messageEl.style.color = '#fff';
    messageEl.style.textShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    messageEl.style.zIndex = '10000';
    messageEl.style.pointerEvents = 'none';
    messageEl.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
    
    // Animate out
    setTimeout(() => {
        messageEl.style.transform = 'translate(-50%, -50%) scale(0)';
        messageEl.style.opacity = '0';
    }, 2000);
    
    // Remove element
    setTimeout(() => {
        messageEl.remove();
    }, 2500);
}

// Add floating animation for hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add sparkle effect on mouse move
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);
