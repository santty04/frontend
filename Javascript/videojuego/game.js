const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize; // = (canvasSize / 10 ) - 1

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


function setCanvasSize() {
    
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementsSize = (canvasSize / 10 ) - 1;
    
    startGame();
}
function startGame() {
    
    
    game.font = elementsSize + 'px Verdana';
    game.textAlign = '';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    mapRowsCols = mapRows.map(row => row.trim().split(''))
    console.log({map, mapRows});
    
    mapRowsCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * colI;
            const posY = elementsSize * (rowI + 1);
            game.fillText(emoji, posX, posY);
            console.log( { row, rowI, col, colI } )
        })
    });

    // for (let i = 0; i < 10; i++) {
    //     for (let z = 1; z < 11; z++) {
    //         game.fillText(emojis[mapRowsCols[z-1][i]], elementsSize * i, elementsSize * z);            
    //     }
    // }

}
// window.innerHeight
// window.innerWidth

// game.fillRect(0,0,100,100);
// game.clearRect(50,50,50,50);

// game.font = '25px Verdana';
// game.fillStyle = 'purple';
// game.textAlign = 'left';
// game.fillText('Platzi', 25, 25);    