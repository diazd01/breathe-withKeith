//Breathe Animation:
const breatheWrap = document.getElementById('breathe-wrap');
const breathe = document.querySelector('.breathe-text');
const breatheContainer = document.getElementById('breathe-contain');
const totalTime = 6500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const chapterContainer = document.querySelector('.chapter-container');
const mainSection = document.getElementById('main');

window.onload = () => {
    breatheAnimation();
}

function breatheAnimation() {
    // breatheContainer.className = 'breathe-contain start';
    breathe.innerText = 'Breathe';
    breatheWrap.className = 'breatheWrap grow';
    mainSection.style.display = 'none';
    setTimeout(() => {
        breathe.innerText = 'with';

        setTimeout(() => {
            breathe.innerText = 'Keith';
            breatheWrap.className = 'breatheWrap shrink';
            breatheContainer.className = 'breathe-contain done';
        }, holdTime);
    }, breatheTime);
    setTimeout(() => {
        breatheContainer.style.display = 'none';
        mainSection.style.display = 'block';
        mainSection.classList.add('fadeIn');
    }, 6500);
}



// setInterval(breatheAnimation, totalTime);
