'use strict';

const Character = require('./character');
const Options = require('./options');
const readline = require('readline');

(function(){

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const options = new Options();

  var enemy = new Character("enemy")
  var hero = new Character("Hero");

  (function(){

    function randomNum(ptr){
      var x = Math.floor(Math.random() * 10);
      var y = Math.floor(Math.random() * 10);
      ptr.setX(x);
      ptr.setY(y);
    }

    randomNum(enemy);
    randomNum(hero);

    while(enemy.getPosition() === hero.getPosition()){
      randomNum(hero);
    }

  }());

  function computeGame(a,b){

    if(a.getX() > 10 || a.getX() < 0){
      a.setX(10);
      return console.log("Are you trying to run? Turn around and find the enemy!")
    }

    if(a.getY() > 10 || a.getY() < 0){
      a.setY(10);
      return console.log("Are you trying to run? Turn around and find the enemy!")
    }

    if (a.getPosition() === b.getPosition()){
      console.log("You must fight off the Enemy!");
      return rl.close();
    }

    if (b.getHealth() === 0){
      console.log("You defeated the Enemy!")
      return rl.close();
    }

    if (a.getHealth() === 0){
      console.log("You have been killed by the Enemy!");
      return rl.close();
    }

    if(a.getX() + 1 === b.getX() || a.getX() + 1 === b.getX()){
      return b.enemyAttack(a);
    } else if(a.getY() + 1 === b.getY() || a.getY() -1 === b.getY()){
      return b.enemyAttack(a);
    }

  };

  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
  console.log("You must find and defeat the Enemy!")
  console.log("If you get to close the Enemy will do damage.")
  console.log("You can only attack the Enemy when you are at the same position.")
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  options.print();
  console.log("================================================================")
  console.log("Begin!")

  rl.on('line', (cmd) => {

    switch (cmd.trim()) {
      case "a":
        hero.moveLeft();
        break;
      case "d":
        hero.moveRight();
        break;
      case "w":
        hero.moveUp();
        break;
      case "s":
        hero.moveDown();
        break;
      case "q":
        if(hero.getPosition() !== enemy.getPosition()){
          console.log("What are you attacking there is no Enemy here");
          break;
        } else {
          hero.attack(hero, enemy);
          break;
        }
      case "e":
        hero.heal();
        break;
      case "z":
        hero.getStats();
        break;
      case "-q":
        rl.close();
        break;
      case "-h":
        options.print();
        break;
      default:
        console.log('Invalid Character');
        break;
    }

    computeGame(hero, enemy);

  });

}());
