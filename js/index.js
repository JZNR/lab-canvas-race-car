const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const player = new Component(225, 600);
const obstacles = [];
const gameArea = {
  frames: 0,
    start: () => {
        interval = setInterval(updateGameArea, 20);
    }, 

    stop: () => {
        clearInterval(interval)
    },

    clear: () => {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    },

    score: function () {
      const points = Math.floor(this.frames / 50);
      context.font = '32px Arial';
      context.fillStyle = 'green';
      context.fillText(`Score: ${points}`, 253, 50);
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
function startGame() {
    canvas.removeAttribute('hidden');
    gameArea.start();
  }
};


function drawObjects() {
  obstacles.forEach((obstacle) => {
    obstacle.y += 1;
    obstacle.drawObstacle();
});

gameArea.frames += 1;

if (gameArea.frames % 120 === 0 ){
  const minWidth = 50;
  const maxWidth = 450;
  const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
  const obstacleTop = new Component(randomWidth, 0, randomWidth, 30, 'yellow');
  obstacles.push(obstacleTop);
  console.log(obstacles);
  }
}

function updateGameArea() {
  gameArea.clear();
  drawObjects();
  player.drawCar();
  gameArea.score();
}