// Your code here 
const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require(`./classes/evil-dragon`);
const Dragon = require('./classes/dragon')



let smaug = new EvilDragon("Smaug", "black", [
  "take over your mountain kingdom",
  "steal all your dwarven gold",
  "burn down your floating village"
],
"Dwarf King");

let falkor = new FriendlyDragon("Falkor", "white", 
["save Atreyu from the swamp",
 "save Atreyu from the Nothing",
 "scare the local bullies into a dumpster"],
"Bastian"
);

let allDragons = Dragon.getDragons(smaug, falkor);
console.log(allDragons);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}
