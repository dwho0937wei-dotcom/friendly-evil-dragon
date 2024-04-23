// Your code here 
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);
  }
}

let dragon1 = new Dragon('Timmy Turner', 'pink');
let dragon2 = new Dragon("Puff", "green");
let dragon3 = new Dragon("Toothless", "black");

console.log( Dragon.getDragons(dragon1, dragon2,dragon3) );

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
