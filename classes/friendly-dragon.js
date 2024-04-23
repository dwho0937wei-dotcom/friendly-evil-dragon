const Dragon = require('./dragon');


class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() {
        this.lifeGoals.forEach(goal => console.log(`${this.name} likes to ${goal}`))
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`;
    }
}
// const friendly1 = new FriendlyDragon('Timmy Turner', 'pink', 'fight', 'Jimmy Neutron');
// console.log(friendly1);

// friendly1.hasLifeGoals();
// console.log(friendly1.helpsPeople());

// const puff = new FriendlyDragon(
//     "Puff",
//     "green",
//     [
//       "live by the sea",
//       "frolick in the autumn mist",
//       "help small children"
//     ],
//     "Jackie Paper"
//   );
// console.log(puff);
// console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
// puff.hasLifeGoals();
// console.log(puff.helpsPeople());

// const toothless = new FriendlyDragon(
//     "Toothless",
//     "black",
//     [
//       "save the town of Burke",
//       "fly with a kid on his back",
//       "hang out with Vikings"
//     ],
//     "Hiccup"
//   );
//   console.log(toothless); toothless.hasLifeGoals();
//   console.log(toothless.helpsPeople());
//   console.log(toothless.breathesFire());

let falkor = new FriendlyDragon("Falkor", "white", 
["save Atreyu from the swamp",
 "save Atreyu from the Nothing",
 "scare the local bullies into a dumpster"],
"Bastian"
)

module.export = FriendlyDragon;