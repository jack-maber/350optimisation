// Saves locations of the canvas, and then clears it
CanvasRenderingContext2D.prototype.clear =
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }
    this.beginPath();
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.closePath();

    if (preserveTransform) {
      this.restore();
    }
};
