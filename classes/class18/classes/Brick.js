import Bounds from "./Bounds.js";

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

  /**
   * @type {Bounds}
   */
  bounds;

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

    this.#updateBounds();
  }

  draw() {
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "black";
  }

  #updateBounds() {
    /**
     * @type {Bounds}
     */
    const bounds = {
      bottom: this.y + this.height,
      left: this.x,
      right: this.x + this.width,
      top: this.y,
    };

    this.bounds = bounds;
  }
}

export default Blick;
