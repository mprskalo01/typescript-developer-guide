"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils/utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    static fromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
