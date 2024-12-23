import { MatchReader } from './classes/MatchReader';
import { CsvFileReader } from './classes/CsvFileReader';
import { MatchResult } from './types/MatchResult';

// create an object that satisfies the 'DataReader' interface

const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

let manUnitedWins = 0;

matchReader.matches.forEach(match => {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  )
    manUnitedWins++;
});
console.log(`Man United won ${manUnitedWins} games`);
