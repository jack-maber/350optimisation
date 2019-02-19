// Draws frames
var render = function () {
  // clear the canvas
  ctx.clear();

  ctx.fillStyle = "#0F0";
  // P1
  ctx.fillRect(p1.x, p1.y, p1.width, p1.height);

  // P2
  ctx.fillRect(p2.x, p2.y, p2.width, p2.height);

  // ball
  ctx.fillStyle = "#DDD";
  ctx.fillRect(ball.x, ball.y, ball.size, ball.size);

  // Text Settings
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  // P1 Score
  ctx.fillText(p1.score, 32, 32);

  // P2 Score
  ctx.fillText(p2.score, canvas.width - 32 - 10, 32);

  // Text options
  ctx.font = "36px Helvetica";

  // Start text
  if (!isGameStarted) {
    ctx.fillText("Hit Space to serve!", 200, canvas.height / 2);
  }

};
