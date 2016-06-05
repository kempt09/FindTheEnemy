'use strict';

module.exports = class Matrix {

  constructor(){
    this.x = 0;
    this.y = 0;
    this.xLimit = 10;
    this.yLimit = 10;
  }

  getX(){
    return this.x;
  }

  setX(x){
    this.x = x;
  }

  getY(){
    return this.y;
  }

  setY(y){
    this.y = y;
  }

  getLimitX(){
    return this.xLimit;
  }

  getLimitY(){
    return this.yLimit;
  }

}
