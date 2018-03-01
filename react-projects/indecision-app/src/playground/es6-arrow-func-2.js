// arguments object - no longer bound with arrow function
const add =  (a, b) => {
  // console.log(arguments.length);
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound
// const user = {
//   name: 'Tuan Hoang',
//   cities: ['Tan Thanh', 'Vietnam', 'Lynnwood']
//   // New syntax for define method
//   printPlacesLived() {
//     this.cities.forEach((city) => {
//       console.log(`${this.name} has lived in city: ${city}`)
//     });
//   }
// }

// Using map instead of forEach()
const user = {
  name: 'Tuan Hoang',
  cities: ['Tan Thanh', 'Vietnam', 'Lynnwood'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  }
}

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());