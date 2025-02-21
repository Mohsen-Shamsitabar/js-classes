(() => {
  /**
   * @type HTMLCanvasElement
   */
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const circle1 = new Circle(100, 100, 100);
  circle1.draw(ctx, "yellow");

  const rect1 = new Rect(100, 100, 100, 100);
  rect1.draw(ctx, "red");

  const circle2 = new Circle(400, 100, 100);
  circle2.draw(ctx, "blue");

  const rect2 = new Rect(300, 100, 100, 100);
  rect2.draw(ctx, "green");

  const circle3 = new Circle(100, 400, 100);
  circle3.draw(ctx, "green");

  const rect3 = new Rect(100, 300, 100, 100);
  rect3.draw(ctx, "blue");

  const circle4 = new Circle(400, 400, 100);
  circle4.draw(ctx, "red");

  const rect4 = new Rect(300, 300, 100, 100);
  rect4.draw(ctx, "yellow");

  // === === === Draw line

  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 500);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(500, 250);
  ctx.closePath();
  ctx.stroke();
})();
