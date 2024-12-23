"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./classes/MatchReader");
const Summary_1 = require("./classes/Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
