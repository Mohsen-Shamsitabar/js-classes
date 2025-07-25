import Ball from "./classes/Ball.js";
import Brick from "./classes/Brick.js";
import Player from "./classes/Player.js";

(() => {
  /**
   * @type {HTMLDivElement}
   */
  const canvasContainer = document.querySelector("#canvas-container");

  /**
   * @type {HTMLCanvasElement}
   */
  const canvas = canvasContainer.querySelector("#canvas");

  const canvasContainerBounds = canvasContainer.getBoundingClientRect();

  const { height: containerHeight, width: containerWidth } =
    canvasContainerBounds;

  canvas.width = containerWidth;
  canvas.height = containerHeight;

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  //==== == == == ====//

  const playerWidth = 150;
  const playerheight = 25;

  new Player({
    x: containerWidth / 2 - playerWidth / 2,
    y: containerHeight - 3 * playerheight,
    width: playerWidth,
    height: playerheight,
    ctx,
    canvasContainerBounds,
  });

  const ball = new Ball({
    x: containerWidth / 2,
    y: containerHeight - 4 * playerheight,
    radius: 16,
    ctx,
    canvasContainerBounds,
  });

  new Brick({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    ctx,
  });

  const mainLoop = timestamp => {
    // console.log(timestamp);

    ball.moveBall();

    requestAnimationFrame(mainLoop);
  };

  requestAnimationFrame(mainLoop);
})();
