"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./classes/CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
// reader.read();
console.log(reader.data[0][0]);
// let manUnitedWins = 0;
// reader.data.forEach(match => {
//   if (
//     (match[1] === 'Man United' && match[5] === matchResult.HomeWin) ||
//     (match[2] === 'Man United' && match[5] === matchResult.AwayWin)
//   )
//     manUnitedWins++;
// });
// console.log(`Man United won ${manUnitedWins} games`);
