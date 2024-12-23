import fs from 'fs';

// Using Generics

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];
  constructor(public fileName: string) {
    this.read();
  }

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(`${this.fileName}`, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
