"use strict";

module.exports = class Options {
  constructor() {}
  print(){
    console.log("Move Up: w");
    console.log("Move Down: s");
    console.log("Move Left: a");
    console.log("Move Right: d");
    console.log("Attack: q");
    console.log("Heal: e");
    console.log("Player Status: z")
    console.log("Quit: -q");
    console.log("Press Enter to Sumbit");
  }
}
