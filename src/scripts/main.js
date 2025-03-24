// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';

// Make 5 pieces of pottery at the wheel

const vase = makePottery('Vase', 5, 4);
// console.log(pot1); 

const largeMug = makePottery('Large Mug', 3, 3);
// console.log(pot2); 

const smallMug = makePottery('Small Mug', 2, 2);
// console.log(pot3); 

const urn = makePottery('Urn', 6, 6);
// console.log(pot4); 

const bowl = makePottery('Bowl', 3, 4);
// console.log(pot5; 

export { vase, largeMug, smallMug, urn, bowl };

// Fire each piece of pottery in the kiln

const firedVase = firePottery(vase, 2020);

const firedLargeMug = firePottery(largeMug, 1987);

const firedSmallMug = firePottery(smallMug, 2010);

const firedUrn = firePottery(urn, 2100);

const firedBowl = firePottery(bowl, 2300);

console.log(firedBowl)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

