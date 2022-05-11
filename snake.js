function Snake(context) {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.draw = function() {
    context.fillStyle = "#7b9696";
    for (let i=0; i<this.tail.length; i++) {
      context.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }

    context.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total - 1] =
      { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas_width) {
      this.x = 100;
      this.y = 100;
      this.total = 0;
      this.tail = [];
      this.xSpeed = scale * 1;
      this.ySpeed = 0;
    }

    if (this.y > canvas_height) {
      this.x = 100;
      this.y = 100;
      this.total = 0;
      this.tail = [];
      this.xSpeed = scale * 1;
      this.ySpeed = 0;

    }

    if (this.x < 0) {
      this.x = 100;
      this.y = 100;
      this.total = 0;
      this.tail = [];
      this.xSpeed = scale * 1;
      this.ySpeed = 0;

    }

    if (this.y < 0) {
      this.x = 100;
      this.y = 100;
      this.total = 0;
      this.tail = [];
      this.xSpeed = scale * 1;
      this.ySpeed = 0;

    }
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function(fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      return true;
    }

    return false;
  }

  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
      }
    }
  }
}
