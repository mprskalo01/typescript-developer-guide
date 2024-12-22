"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./classes/Sorter");
const LinkedList_1 = require("./classes/LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0, 7]);
// const sorterNumbers = new Sorter(numbersCollection);
// sorterNumbers.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('ACBKDOE');
// const sorterString = new Sorter(charactersCollection);
// sorterString.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
