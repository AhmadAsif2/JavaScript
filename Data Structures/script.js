'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20.00',
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your pasta with ingredients ${ing1}, ${ing2} & ${ing3}`
    );
  },
};

/* 
  //////////////////////////////// Destructuring Arrays
  /// Destructuring is to break complex data structure to smaller data structure 
// */
// const arr = [21, 12, 31];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// // const temp = first;
// // first = second;
// // second = first;

// // console.log(first, second);

// // Swapping using destructuring
// [first, second] = [second, first];
// console.log(first, second);

// const [starter, mainMenu] = restaurant.order(2, 0);
// console.log(starter, mainMenu);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

/* 
          Destructuring Objects
*/

// const { name, openingHours, starterMenu } = restaurant;
// console.log(name, openingHours, starterMenu);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starterMenu);

// // Mutating variables
// let a1 = 111;
// let b1 = 999;

// const obj = { a: 12, b: 44, c: 34 };

// ({ a1, b1 } = obj);
// console.log(a1, b1);

// // Nesting objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via De Sol, 21',
//   starterIndex: 2,
//   mainIndex: 2,
// });

/* 
  ///////////////// Spread Operator //////////////////////
*/

const arr = [12, 44, 99, 102];
const newArr = [...arr];

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

// Iterables: arrays, maps, sets, strings not objects
const str = 'Ahmad';
const letters = [...str, ' ', 'D'];
console.log(...str);

console.log(letters);

const ingredients = [
  // prompt("let's make pasta ingredient1 ?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);
