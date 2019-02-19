// Game Objects
var ball = {
    size: 10
}

var p1 = {
    width: 10,
    height: 100,
    x: 20,
    y: (canvas.height - 100) / 2,
    score: 0,
    speed: 600
}

var p2 = {
    width: 10,
    height: 100,
    x: canvas.width - 10 - 20,
    y: (canvas.height - 100) / 2,
    score: 0,
    speed: 600
}

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  //Refresh to next frame
  requestAnimationFrame(main);
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Start Game
var isGameStarted = false;
var then = Date.now();
reset();
main();


