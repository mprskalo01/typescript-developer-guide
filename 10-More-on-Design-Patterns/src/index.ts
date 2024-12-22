import { Sorter } from './classes/Sorter';
import { NumbersCollection } from './classes/NumbersCollection';
import { CharactersCollection } from './classes/CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
const sorterNumbers = new Sorter(numbersCollection);
// sorterNumbers.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ACBKDOE');
const sorterString = new Sorter(charactersCollection);
sorterString.sort();
console.log(charactersCollection.data);
