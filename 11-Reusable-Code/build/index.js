"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./classes/MatchReader");
const CsvFileReader_1 = require("./classes/CsvFileReader");
const MatchResult_1 = require("./types/MatchResult");
// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
let manUnitedWins = 0;
matchReader.matches.forEach(match => {
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin))
        manUnitedWins++;
});
console.log(`Man United won ${manUnitedWins} games`);
