'use strict';

const Controls = require('./controls');

module.exports = class Actions extends Controls {

  constructor(){
    super(...arguments);
  }

  attack(a, b){
    a.setExp(1);
    b.damage();
  }

  damage(){
    return this.setHealth(this.getHealth() - 100);
  }

  enemyAttack(a){
    return a.setHealth(a.getHealth() - 20);
  }

  heal(){
    return this.setHealth(this.getHealth() + 10);
  }

}
