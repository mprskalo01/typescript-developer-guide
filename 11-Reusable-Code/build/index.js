"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./classes/MatchReader");
const matchReader = new MatchReader_1.MatchReader('football.csv');
console.log(matchReader.data[0][0]);
// let manUnitedWins = 0;
// reader.data.forEach(match => {
//   if (
//     (match[1] === 'Man United' && match[5] === matchResult.HomeWin) ||
//     (match[2] === 'Man United' && match[5] === matchResult.AwayWin)
//   )
//     manUnitedWins++;
// });
// console.log(`Man United won ${manUnitedWins} games`);
