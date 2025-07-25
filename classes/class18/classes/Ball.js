class BallProps {
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
  radius;
  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;
  /**
   * @type {DOMRect}
   */
  canvasContainerBounds;
}

class Ball {
  #BALL_SPEED = 30;
  #X_SPEED = 0;
  #Y_SPEED = 0;

  x = 0;
  y = 0;
  radius = 0;

  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /**
   * @type {DOMRect}
   */
  canvasContainerBounds;

  //=== == == == ===//

  /**
   * @param {BallProps} options
   */
  constructor(options) {
    const { x, y, radius, ctx, canvasContainerBounds } = options;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.canvasContainerBounds = canvasContainerBounds;

    const xVector = Math.random() * 2 - 1;
    const yVector = Math.random() * 2 - 1;

    this.#X_SPEED = xVector * 2;
    this.#Y_SPEED = yVector * 2;

    this.drawBall();
  }

  drawBall() {
    this.ctx.fillStyle = "blue";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.fillStyle = "black";
  }

  // might have side effects!
  removeBall() {
    this.ctx.clearRect(
      this.x - 1 - this.radius,
      this.y - 1 - this.radius,
      this.radius * 2 + 2,
      this.radius * 2 + 2,
    );
  }

  moveBall() {
    this.removeBall();

    this.x += this.#X_SPEED;
    this.y += this.#Y_SPEED;

    this.drawBall();
  }
}

export default Ball;
