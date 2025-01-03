"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// Using Generics
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
        this.read();
    }
    read() {
        this.data = fs_1.default
            .readFileSync(`${this.fileName}`, { encoding: 'utf8' })
            .split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
