const add = (a, b) => {
  // console.log(arguments)
  return a + b;
};

// console.log(add(55, 1));

const user = {
  name: 'Joel Bock',
  cities: ['Flensburg', 'Geneva', 'Hamburg'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge area
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
