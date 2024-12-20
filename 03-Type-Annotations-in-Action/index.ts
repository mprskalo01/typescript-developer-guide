/*
? Type annotations - code we add to tell TypeScript what type of value a vriable will refer to
? Type inference - TypeScript tries to figure out what type of value a vriable refers to
*/

//*/ Annotations with Variables

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Object Literal Annotations

// arrays - type[] - the array can only hold values of that type
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let isTrue: boolean[] = [true, true, false];

// classes
// class Car {}

// let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Annotations Around Functions
const logNumber: (i: number) => void = (i: number) => console.log(i);
// logNumber(10);

//*/ Understanding Inference

// Inference occurs only if the declaration and initialization of the variable is done on the same line eg. 'let apples = 5' is the same as 'let apples: number = 5';

// The 'Any' Type - value has an undetermined type - bad for TypeScript environment

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
foundWord = words.includes('green'); // true or false
// console.log(foundWord);

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12, 25];
let numberAboveZero: boolean | number = false; // setting the type to boolean OR number

[numberAboveZero] = numbers.filter(number => number > 0);
console.log(numberAboveZero);
