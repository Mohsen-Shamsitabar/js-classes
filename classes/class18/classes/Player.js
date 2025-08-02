import clamp from "../utility/clamp.js";
import Bounds from "./Bounds.js";

class PlayerProps {
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
  /**
   * @type {DOMRect}
   */
  canvasContainerBounds;
}

class Player {
  #PLAYER_SPEED = 30;
  x = 0;
  y = 0;
  width = 0;
  height = 0;

  /**
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /**
   * @type {DOMRect}
   */
  canvasContainerBounds;

  /**
   * @type {Bounds}
   */
  bounds;

  //=== == == == ===//

  /**
   * @param {PlayerProps} options
   */
  constructor(options) {
    const { x, y, width, height, ctx, canvasContainerBounds } = options;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.canvasContainerBounds = canvasContainerBounds;

    this.#updateBounds();

    this.#initControls();
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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

  #initControls() {
    const PLAYER_KEYS = {
      RIGHT: "d",
      LEFT: "a",
    };

    /**
     * @param {KeyboardEvent} event
     */
    const handleKeyPress = event => {
      const { key } = event;

      switch (key) {
        case PLAYER_KEYS.LEFT: {
          this.#moveLeft();

          return;
        }
        case PLAYER_KEYS.RIGHT: {
          this.#moveRight();

          return;
        }
        default: {
          return;
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);
  }

  #moveLeft() {
    this.x = clamp(
      0,
      this.canvasContainerBounds.width,
      this.x - this.#PLAYER_SPEED,
    );

    this.#updateBounds();
  }

  #moveRight() {
    this.x = clamp(
      0,
      this.canvasContainerBounds.width - this.width,
      this.x + this.#PLAYER_SPEED,
    );

    this.#updateBounds();
  }
}

export default Player;
