/*
Theory:

Types

More on Types

Examples of Types

Where do we use Types

*/
const today = new Date();

today.getMonth();
// today.sdadsad(); // Property 'sdadsad' does not exist on type 'Date'.

const Person = {
  age: 20,
};

class Color {}
const red = new Color(); // type of Color
