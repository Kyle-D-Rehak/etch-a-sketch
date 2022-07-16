const canvas = document.querySelector('#canvas');

function createCanvas(size) {
    const oldTiles = Array.from(document.querySelectorAll('.gridTile'));
    oldTiles.forEach(tile => canvas.removeChild(tile));

    canvas.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`);

    for (let i = 0; i < (size*size); i++) {
        const div = document.createElement('div');
        div.classList.add('gridTile');
        canvas.appendChild(div);
    }
}