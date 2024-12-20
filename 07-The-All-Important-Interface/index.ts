// Long Type Annotations

/*
const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  isBroken: boolean;
}): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken? ${vehicle.isBroken ? 'Yes' : 'No'}
  `);
};

*/

// Fixing long annotations with Interfaces

// Syntax around Interfaces, Functions in Interfaces, Code Reuse with Interfaces

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink2 = {
  color: 'brown',
  isCarbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// This function can be used in any object that has a summary() method
const printSummary = (item: Reportable): void => {
  // removed the long type annotations
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
