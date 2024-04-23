const Dragon = require('./dragon');


class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
}
const friendly1 = new FriendlyDragon('Timmy Turner', 'pink', 'fight', 'Puff');
console.log(friendly1);