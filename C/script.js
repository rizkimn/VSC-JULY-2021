let container = document.querySelector('.container');
let card = document.querySelector('.card');

container.addEventListener('mousemove', (e) => {
    let yAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let xAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${-yAxis}deg) rotateX(${xAxis}deg)`;
});