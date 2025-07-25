class BlickProps {
  /**
   * @type {number}
   */
  x;
  /**
   * @type {number}
   */
  y;
  /**
   * @type {number}
   */
  width;
  /**
   * @type {number}
   */
  height;
  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;
}

class Blick {
  x = 0;
  y = 0;
  width = 0;
  height = 0;

  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  //=== == == == ===//

  /**
   * @param {BlickProps} options
   */
  constructor(options) {
    const { x, y, width, height, ctx } = options;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.drawBrick();
  }

  drawBrick() {
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "black";
  }

  // might have side effects!
  removeBlick() {
    this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2);
  }
}

export default Blick;
