import { MatchReader } from './classes/MatchReader';
import { Summary } from './classes/Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisHtmlReport('Man United');
matchReader.load();

summary.buildAndPrintReport(matchReader.matches);