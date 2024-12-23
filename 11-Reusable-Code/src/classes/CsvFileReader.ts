import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {
    this.read();
  }

  read(): void {
    this.data = fs
      .readFileSync(`${this.fileName}`, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
