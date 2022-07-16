const canvas = document.querySelector('#canvas');
const colorButton = document.querySelector('#colorButton');
const eraseButton = document.querySelector('#eraseButton');
const clearButton = document.querySelector('#clearButton');
const resetButton = document.querySelector('#resetButton');
const colorDisplay = document.querySelector('#colorDisplay');
const colorPicker = document.querySelector('#colorPicker');
const slider = document.querySelector('.slider');
const sliderLabel = document.querySelector('#sliderLabel');
let color = '#2b2b2b';
let lastColor = '#2b2b2b';
let mouseDown = false;

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);

colorPicker.addEventListener('input', () => {color = colorPicker.value; lastColor = color; updateColorDisplay(color);});

slider.addEventListener('change', () => {createCanvas(slider.value); updateColorDisplay(color);});
slider.addEventListener('input', () => {updateSliderText(slider.value); color = lastColor; updateColorDisplay(color);});

colorButton.addEventListener('click', () => {color = lastColor; updateColorDisplay(color);});
eraseButton.addEventListener('click', () => {lastColor = color; color = 'white'; updateColorDisplay(color);});
clearButton.addEventListener('click', () => {createCanvas(slider.value);color = lastColor; updateColorDisplay(color);});
resetButton.addEventListener('click', () => {slider.value = 16; createCanvas(slider.value); updateSliderText(slider.value); color = '#2b2b2b'; lastColor = color; updateColorDisplay(color);});


createCanvas(slider.value);
sliderLabel.textContent = `${slider.value} x ${slider.value}`;

function updateSliderText(value) {
    sliderLabel.textContent = `${value} x ${value}`;
}

function updateColorDisplay(color) {
    colorDisplay.setAttribute('style', `background-color: ${color}`);
}

function createCanvas(size) {
    const oldTiles = Array.from(document.querySelectorAll('.gridTile'));
    oldTiles.forEach(tile => canvas.removeChild(tile));

    canvas.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`);

    for (let i = 0; i < (size*size); i++) {
        const div = document.createElement('div');
        div.classList.add('gridTile');
        div.addEventListener('mousedown', e => e.target.style.background = `${color}`);
        div.addEventListener('mouseover', e => {if(mouseDown == true) {e.target.style.background = `${color}`}});
        canvas.appendChild(div);
    }
}