const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
const spanLives = document.querySelector("#lives");
const spanTimes = document.querySelector("#time");
const spanRecord = document.querySelector("#record");
const pResult = document.querySelector("#result");

let canvasSize;
let elementsSize; // = (canvasSize / 10 ) - 1
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
  x: undefined,
  y: undefined,
};

const giftPosition = {
  x: undefined,
  y: undefined,
};
let enemyPositions = [];

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.7;
  } else {
    canvasSize = window.innerHeight * 0.7;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
}
function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + "px Verdana";
  game.textAlign = "end";

  const map = maps[level];

  if (!map) {
    gameWin();
    return;
  }

  if(!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
    showRecord();
  }

  const mapRows = map.trim().split("\n");
  mapRowsCols = mapRows.map((row) => row.trim().split(""));
  console.log({ map, mapRows, mapRowsCols });

  showLives();

  enemyPositions = [];
  game.clearRect(0, 0, canvasSize, canvasSize);
  mapRowsCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);

      if (col == "O") {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({ playerPosition });
        }
      } else if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == "X") {
        enemyPositions.push({
          x: posX,
          y: posY,
        });
      }

      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();
}

function movePlayer() {
  const giftCollisionX =
    playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
  const giftCollisionY =
    playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
  const giftCollision = giftCollisionX && giftCollisionY;

  if (giftCollision) {
    levelWin();
  }

  const enemyCollision = enemyPositions.find((enemy) => {
    const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
    const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
  });

  if (enemyCollision) {
    levelFail();
  }

  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function levelWin() {
  console.log('Subiste de nivel');
  level++;
  startGame();
}

function levelFail() {
  console.log('Chocaste contra un enemigo :(');
  lives--;
  
  if (lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

function gameWin() {
  console.log('¡Terminaste el juego!');
  clearInterval(timeInterval);

  const recordTime = localStorage.getItem('record_time');
  const playerTime = Date.now() - timeStart;

  if (recordTime) {
    if (recordTime >= playerTime) {
      localStorage.setItem('record_time', playerTime);
      pResult.innerHTML = 'Nicee, superaste el record :D';
    } else {
      pResult.innerHTML = 'Lo siento, no superaste el record :(';
    }
  } else {
    localStorage.setItem('record_time', playerTime);
      pResult.innerHTML = 'Primera vez? Muy bien, pero ahora trata de superar tu tiempo!!';
  }
  console.log({recordTime, playerTime});

  console.log({recordTime});
}
function showLives() {
  spanLives.innerHTML = emojis["HEART"].repeat(lives)
}
function showTime() {
  spanTimes.innerHTML = Date.now() - timeStart;
}
function showRecord() {
  spanRecord.innerHTML = localStorage.getItem('record_time');
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
  if (playerPosition.y - elementsSize < 1) {
    console.log(elementsSize);
    console.log("OUT");
  } else {
    playerPosition.y -= elementsSize;
    startGame();
  }
}

function moveLeft() {
  console.log("Me quiero mover hacia izquierda");
  if (playerPosition.x - (elementsSize - 50) < elementsSize) {
    console.log("OUT");
  } else {
    playerPosition.x -= elementsSize;
    startGame();
  }
}
function moveRight() {
  console.log("Me quiero mover hacia derecha");
  if (playerPosition.x + elementsSize > canvasSize) {
    console.log("OUT");
  } else {
    playerPosition.x += elementsSize;
    startGame();
  }
}
function moveDown() {
  console.log("Me quiero mover hacia abajo");

  if (playerPosition.y + elementsSize > canvasSize) {
    console.log("OUT");
  } else {
    playerPosition.y += elementsSize;
    startGame();
  }
}

// window.innerHeight
// window.innerWidth

// game.fillRect(0,0,100,100);
// game.clearRect(50,50,50,50);

// game.font = '25px Verdana';
// game.fillStyle = 'purple';
// game.textAlign = 'left';
// game.fillText('Platzi', 25, 25);
