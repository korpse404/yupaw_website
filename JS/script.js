const bgContainer = document.querySelector('.bg-container');
const bgLight = document.querySelector('.bg-light');

bgContainer.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    bgLight.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
});