import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../../interfaces/MatchResult';
import { dateStringToDate } from '../../utils/utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(fileName: string) {
    super(fileName);
  }
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
