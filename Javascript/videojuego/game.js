const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");

let canvasSize;
let elementsSize; // = (canvasSize / 10 ) - 1

const playerPosition = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10 - 1;

  startGame();
}
function startGame() {
  game.font = elementsSize + "px Verdana";
  game.textAlign = "";

  const map = maps[0];
  const mapRows = map.trim().split("\n");
  mapRowsCols = mapRows.map((row) => row.trim().split(""));
  console.log({ map, mapRows });

  game.clearRect(0, 0, canvasSize, canvasSize);
  mapRowsCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * colI;
      const posY = elementsSize * (rowI + 1);

      if (col == "O") {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({ playerPosition });
        }
      }
      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();

  // for (let i = 0; i < 10; i++) {
  //     for (let z = 1; z < 11; z++) {
  //         game.fillText(emojis[mapRowsCols[z-1][i]], elementsSize * i, elementsSize * z);
  //     }
  // }
}

function movePlayer() {
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);

function moveByKeys(event) {
  if (event.key == "ArrowUp") moveUp();
  else if (event.key == "ArrowLeft") moveLeft();
  else if (event.key == "ArrowRight") moveRight();
  else if (event.key == "ArrowDown") moveDown();
}
function moveUp() {
  console.log("Me quiero mover hacia arriba");
  playerPosition.y -= elementsSize;
  startGame();
}

function moveLeft() {
  console.log("Me quiero mover hacia izquierda");
  playerPosition.x -= elementsSize;
  startGame();
}
function moveRight() {
  console.log("Me quiero mover hacia derecha");
  playerPosition.x += elementsSize;
  startGame();
}
function moveDown() {
  console.log("Me quiero mover hacia abajo");
  playerPosition.y += elementsSize;
  startGame();
}

// window.innerHeight
// window.innerWidth

// game.fillRect(0,0,100,100);
// game.clearRect(50,50,50,50);

// game.font = '25px Verdana';
// game.fillStyle = 'purple';
// game.textAlign = 'left';
// game.fillText('Platzi', 25, 25);
