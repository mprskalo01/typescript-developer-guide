import { read } from 'fs';
import { CsvFileReader } from './classes/CsvFileReader';
import { MatchResult } from './types/MatchResult';

const reader = new CsvFileReader('football.csv');
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
