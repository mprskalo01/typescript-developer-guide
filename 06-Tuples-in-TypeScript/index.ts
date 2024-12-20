// Tuple - array-like structure where each element represents some property of a record

// Object
const drink = {
  color: 'brown',
  isCarbonated: 'true',
  sugar: 40,
};

// Tuple
type Drink = [string, boolean, number]; // making a tuple type

// const pepsi: [string, boolean, number] = ['brown', true, 40];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 20];
const tea: Drink = ['brown', false, 0];

// Not used often

const carSpecs: [number, number] = [400, 1500];

const carStats = {
  horsepower: 400,
  weight: 1500,
};
