'use strict';

const Matrix = require('./matrix');

module.exports = class Controls extends Matrix {

  constructor(){
    super(...arguments);
  }

  moveUp(){
    return this.setY(this.getY() + 1);
  }

  moveDown(){
    return this.setY(this.getY() - 1);
  }

  moveRight(){
    return this.setX(this.getX() + 1);
  }

  moveLeft(){
    return this.setX(this.getX() - 1);
  }

}
