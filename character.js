'use strict';

const Actions = require('./actions');

module.exports = class Character extends Actions {

  constructor(name) {
    super(...arguments);
    this.name = name;
    this.health = 100;
    this.exp = 0;
    this.position = [this.getX(), this.getY()];
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  getHealth(){
    return this.health;
  }

  setHealth(num){
    this.health = num;
  }

  getPosition(){
    return [this.getX(), this.getY()];
  }

  setPosition(position){
    this.position = position;
  }

  getExp(){
    return this.exp;
  }

  setExp(num){
    this.exp = this.getExp() + num;
  }

  // print methods

  getStats(){
    console.log("Name: " + this.getName());
    console.log("Health: " + this.getHealth());
    console.log("Current Location: " + this.getPosition());
  }

}
