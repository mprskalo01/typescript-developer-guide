"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf8' })
    .split('\n')
    .map((row) => row.split(','));
// enum - enumeration
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
let manUnitedWins = 0;
matches.forEach(match => {
    if ((match[1] === 'Man United' && match[5] === matchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === matchResult.AwayWin))
        manUnitedWins++;
});
console.log(`Man United won ${manUnitedWins} games`);
