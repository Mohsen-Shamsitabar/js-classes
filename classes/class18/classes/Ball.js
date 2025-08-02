import Bounds from "./Bounds.js";

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
  #BALL_SPEED = 5;
  #velocity = [0, 0];

  x = 0;
  y = 0;
  radius = 0;

  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /**
   * @type {Bounds}
   */
  canvasContainerBounds;

  /**
   * @type {Bounds}
   */
  bounds;

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
    this.canvasContainerBounds = {
      bottom: canvasContainerBounds.bottom,
      left: canvasContainerBounds.left,
      right: canvasContainerBounds.right,
      top: canvasContainerBounds.top,
    };

    const xVelocity = Math.random() * 2 - 1;
    const yVelocity = -Math.sqrt(1 - Math.pow(xVelocity, 2));

    this.#updateBounds();

    this.#velocity = [
      xVelocity * this.#BALL_SPEED,
      yVelocity * this.#BALL_SPEED,
    ];
  }

  #updateBounds() {
    /**
     * @type {Bounds}
     */
    const bounds = {
      bottom: this.y + this.radius,
      left: this.x - this.radius,
      right: this.x + this.radius,
      top: this.y - this.radius,
    };

    this.bounds = bounds;
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.fillStyle = "black";
  }

  /**
   * @param {Bounds} bounds
   * @param {boolean} isScreen
   */
  handleCollision(bounds, isScreen) {
    const [xVelocity, yVelocity] = this.#velocity;
    const currentBounds = this.bounds;

    if (isScreen) {
      if (
        currentBounds.right >= bounds.right ||
        currentBounds.left <= bounds.left
      ) {
        this.#velocity = [-xVelocity, yVelocity];
      }

      if (
        currentBounds.bottom >= bounds.bottom ||
        currentBounds.top <= bounds.top
      ) {
        this.#velocity = [xVelocity, -yVelocity];
      }
    } else {
      //Objects
    }
  }

  update() {
    this.handleCollision(this.canvasContainerBounds, true);

    const [xVelocity, yVelocity] = this.#velocity;

    const newX = this.x + xVelocity;
    const newY = this.y + yVelocity;

    this.x = newX;
    this.y = newY;

    this.#updateBounds();

    this.draw();
  }
}

export default Ball;
