import { Sorter } from './classes/Sorter';
import { NumbersCollection } from './classes/NumbersCollection';
import { CharactersCollection } from './classes/CharactersCollection';
import { LinkedList } from './classes/LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection('ACBKDOE');
charactersCollection.sort()

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
