import fs from 'fs';
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

// enum - enumeration
enum matchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

matches.forEach(match => {
  if (
    (match[1] === 'Man United' && match[5] === matchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === matchResult.AwayWin)
  )
    manUnitedWins++;
});

console.log(`Man United won ${manUnitedWins} games`);
