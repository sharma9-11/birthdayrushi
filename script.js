// A mix of emojis for a magical, blooming aesthetic
const flowers = ['🌸', '🌺', '🌼', '✨', '💖'];

const bloomContainer = document.getElementById('bloom-container');
const mainContainer = document.getElementById('main-container');

function createFlower() {
    const flowerEl = document.createElement('div');
    flowerEl.classList.add('flower');
    
    // Pick a random emoji from the array
    flowerEl.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    
    // Assign random coordinates across the viewport
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    
    // Assign random sizes
    const randomSize = Math.floor(Math.random() * 30) + 20;
    
    // Send these random values to the CSS variables
    flowerEl.style.setProperty('--x', `${randomX}vw`);
    flowerEl.style.setProperty('--y', `${randomY}vh`);
    flowerEl.style.setProperty('--size', `${randomSize}px`);
    
    bloomContainer.appendChild(flowerEl);
    
    // Cleanup: Remove the div after the 3-second CSS animation ends to save memory
    setTimeout(() => {
        flowerEl.remove();
    }, 3000);
}

// 1. The Initial "Bang" Effect: Rapidly spawn 40 flowers on load
for(let i = 0; i < 40; i++) {
    setTimeout(createFlower, Math.random() * 800);
}

// 2. The Sustained Bloom: Spawn a new flower every 200ms
setInterval(createFlower, 200);

// 3. The Click Transition
mainContainer.addEventListener('click', () => {
    // Add the CSS class that changes opacity to 0
    mainContainer.classList.add('fade-out');
    
    // Wait exactly 1 second (matching the CSS transition) before redirecting
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 1000);
});