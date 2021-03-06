export default class Heroine {
  constructor(dimension) {
    // this.ctx = ctx;
    this.dimension = dimension;
    this.x = 150;
    this.y = 200;
    this.health = 3;
    this.width = 32;
    this.height = 48;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 4;
    this.moving = false;
    this.heroineSprite = new Image();
    this.heroineSprite.src = "./src/images/sailormoon.png";
    this.keys = [];
    // this.spaceBar = [];
    this.attack = false;
  }

  draw(ctx) {
    ctx.drawImage(
      this.heroineSprite,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  animate(ctx) {
    this.draw(ctx);
  }

  keyCount(ele) {
    let counter = 0;
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === ele) counter += 1;
    }

    return counter;
  }

  keyDown(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      // if (e.key === "w" || e.key === "s") {
      e.preventDefault();
      this.keys[e.key] = true;
      this.moving = true;
    }
    if (e.key === " ") {
      // changing spacebar to enter for attack
      // if (e.key === "Enter") {
      this.keys[e.key] = true;
      this.attack = true;
    }
  }

  keyUp(e) {
    delete this.keys[e.key];
    this.frameY = 2;
    this.moving = false;
    this.attack = false;
  }

  handleFrame() {
    if (this.frameX < 3 && this.moving) this.frameX++;
    else this.frameX = 0;
  }
}
