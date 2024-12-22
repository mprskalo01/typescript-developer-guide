import { Sorter } from './classes/Sorter';
import { NumbersCollection } from './classes/NumbersCollection';
import { CharactersCollection } from './classes/CharactersCollection';
import { LinkedList } from './classes/LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
// const sorterNumbers = new Sorter(numbersCollection);
// sorterNumbers.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('ACBKDOE');
// const sorterString = new Sorter(charactersCollection);
// sorterString.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
