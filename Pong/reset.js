// Reset the game
var reset = function () {

  isGameStarted = false;

  ball.x = (canvas.width - ball.size) / 2;
  ball.y = (canvas.height - ball.size) / 2;
  p1.y =   (canvas.height - 100) / 2;
  p2.y =   (canvas.height - 100) / 2;


  // randomly starts ball from left or right
  ball.speedX = Math.random() > 0.5 ? 600 : -600;
  ball.speedY = 0;
}
