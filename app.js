/*jshint esversion: 6*/
const board = document.querySelector('#board');
const SQUARE_NUMBER = 450;
const colors = ['#D5F323', '#67DB61', '#00BA86', '#009492', '#006D81', '#8BDE2F', '#00AD4F', '#00E9F7'];

for (let i=0; i<SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
}

function setColor(event) {
    const element = event.target;
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
