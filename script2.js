const notebook = document.getElementById('notebook');
const step1Container = document.getElementById('step1-notebook');
const step2Letter = document.getElementById('step2-letter');
const step3Video = document.getElementById('step3-video'); // NEW
const danceVideo = document.getElementById('dance-video'); // NEW
const bgMusic = document.getElementById('bg-music');
const hintText = document.getElementById('hint-text');
const flashOverlay = document.getElementById('flash-overlay');
const balloonContainer = document.getElementById('balloon-container');
let clickState = 0; 

document.body.addEventListener('click', () => {
    
    if (clickState === 0) {
        notebook.classList.add('is-open');
        hintText.style.opacity = '0';
        
        bgMusic.play().catch(error => {
            console.log("Audio autoplay blocked.", error);
        });
        
        setTimeout(() => { clickState = 1; }, 500); 
    }
    
    else if (clickState === 1) {
        step1Container.classList.add('hidden-section');
        
        setTimeout(() => {
            step1Container.style.display = 'none'; 
            step2Letter.classList.remove('hidden-section');
            step2Letter.classList.add('visible-section');
        }, 800);
        
        setTimeout(() => { clickState = 2; }, 1500);
    }
    
    else if (clickState === 2) {
        step2Letter.classList.remove('visible-section');
        step2Letter.classList.add('hidden-section');
        
        triggerExplosion();
        
        setTimeout(() => {
            step2Letter.style.display = 'none';
            step3Video.classList.remove('hidden-section');
            step3Video.classList.add('visible-section');
            
            danceVideo.play();
        }, 500);
        
        clickState = 3; 
    }
});

function triggerExplosion() {
    flashOverlay.classList.add('flash-active');
    
    setTimeout(() => {
        flashOverlay.classList.remove('flash-active');
    }, 150);

    const balloonEmojis = ['🎈', '🎈', '✨', '💖', '🎈'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.innerText = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
            
            balloon.style.left = `${Math.random() * 80 + 10}vw`;
            balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
            
            balloonContainer.appendChild(balloon);
            
            setTimeout(() => { balloon.remove(); }, 5000);
            
        }, i * 50); 
    }
}
