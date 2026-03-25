const flowers = ['🌸', '🌺', '🌼', '✨', '💖'];

const bloomContainer = document.getElementById('bloom-container');
const mainContainer = document.getElementById('main-container');

function createFlower() {
    const flowerEl = document.createElement('div');
    flowerEl.classList.add('flower');
    flowerEl.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomSize = Math.floor(Math.random() * 30) + 20;
    flowerEl.style.setProperty('--x', `${randomX}vw`);
    flowerEl.style.setProperty('--y', `${randomY}vh`);
    flowerEl.style.setProperty('--size', `${randomSize}px`);
    bloomContainer.appendChild(flowerEl);
    setTimeout(() => {
        flowerEl.remove();
    }, 3000);
}
for(let i = 0; i < 40; i++) {
    setTimeout(createFlower, Math.random() * 800);
}
setInterval(createFlower, 200);
mainContainer.addEventListener('click', () => {
    mainContainer.classList.add('fade-out');
    
    // Wait exactly 1 second (matching the CSS transition) before redirecting
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 1000);
});
