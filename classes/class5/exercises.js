class Shape {
  x = 0;
  y = 0;

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getArea = () => {
    throw new Error("Whats the shape ?!");
  };

  getPerimeter = () => {
    throw new Error("Whats the shape ?!");
  };
}

class Circle extends Shape {
  radius = 0;

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   */
  constructor(x, y, radius) {
    super(x, y);

    this.radius = radius;
  }

  getArea = () => {
    return Math.PI * this.radius ** 2;
  };

  getPerimeter = () => {
    return Math.PI * this.radius * 2;
  };

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} color
   */
  draw = (ctx, color = "black") => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    return;
  };
}

class Rect extends Shape {
  width = 0;
  height = 0;

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    super(x, y);

    this.height = height;
    this.width = width;
  }

  getArea = () => {
    return this.width * this.height;
  };

  getPerimeter = () => {
    return (this.width + this.height) * 2;
  };

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} color
   */
  draw = (ctx, color = "black") => {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return;
  };
}
