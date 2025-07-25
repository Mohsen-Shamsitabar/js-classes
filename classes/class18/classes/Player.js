import clamp from "../utility/clamp.js";

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

    this.drawPlayer();

    this.initControls();
  }

  drawPlayer() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // might have side effects!
  removePlayer() {
    this.ctx.clearRect(this.x - 1, this.y - 1, this.width + 2, this.height + 2);
  }

  initControls() {
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
          this.moveLeft();

          return;
        }
        case PLAYER_KEYS.RIGHT: {
          this.moveRight();

          return;
        }
        default: {
          return;
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);
  }

  moveLeft() {
    this.removePlayer();

    this.x = clamp(
      0,
      this.canvasContainerBounds.width,
      this.x - this.#PLAYER_SPEED,
    );

    this.drawPlayer();
  }

  moveRight() {
    this.removePlayer();

    this.x = clamp(
      0,
      this.canvasContainerBounds.width - this.width,
      this.x + this.#PLAYER_SPEED,
    );

    this.drawPlayer();
  }
}

export default Player;
