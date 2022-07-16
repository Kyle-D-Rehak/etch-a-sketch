const canvas = document.querySelector('#canvas');
let color = 'black';
let mouseDown = false;

document.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);


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