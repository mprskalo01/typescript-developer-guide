// Arrays in TypeScript
const carMakers = ['bmw', 'mercedes', 'skoda'];
// const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['M340I', 'C63', 'Superb']]; // type of String[][]
// const carsByMake: String[][] = [];

// Why Typed Arrays?

// 1) Help with inference when extracting values
const car0 = carMakers[0]; // expects the value of this to be string
const myCar = carMakers.pop(); // expects the value of this to be string

// 2) Prevent incompatible values
// carMakers.push(100) // cannot push because needs to be string

// 3) Help with array methods like map, forEach, reduce etc.
carMakers.map((car: string): string => car.toUpperCase());

// Multiple Types in Arrays
// 4) Flexible - arrays can stillcontaion multiple different types

const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];

importantDates.push('2030-10-10');
importantDates.push(new Date());

// When to use Typed Arrays
// EVERYWHERE
