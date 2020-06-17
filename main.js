//Variables
const breatheWrap = document.getElementById('breathe-wrap');
const breathe = document.querySelector('.breathe-text');
const breatheContainer = document.getElementById('breathe-contain');
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const chapterContainer = document.querySelector('.chapter-container');

window.onload = () => {
    breatheAnimation();
}
//Functions:
function breatheAnimation() {
    breatheContainer.className = 'breathe-contain start';
    breathe.innerText = 'Breathe';
    breatheWrap.className = 'breatheWrap grow';

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
        chapterContainer.classList.add('fadeIn');
    }, 8500);
}



// setInterval(breatheAnimation, totalTime);
