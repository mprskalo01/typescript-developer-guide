class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c', 'd', 'e']);
// Type inference
// const arr = new ArrayOfAnything(['a', 'b', 'c', 'd', 'e']);

// Example of generics with functions
function printStrings(arr: string[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}
function printNumbers(arr: number[]) {
  arr.forEach(item => {
    console.log(item);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}

printAnything<string>(['a', 'b', 'c', 'd']);
// printAnything(['a', 'b', 'c', 'd']); // works with inference

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}
class House {
  print() {
    console.log('I am a house');
  }
}

// Using an interface to promise to a generic that there will be that option on the generic
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach(item => {
    item.print();
  });
}

printHousesOrCars<House>([new House(), new House()]);

printHousesOrCars<Car>([new Car(), new Car()]);
