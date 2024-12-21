import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  color: 'red';
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `<div>
    <h1>Company name: ${this.name}</h1>
    <h3>${this.catchPhrase}</h3>
    </div>
    `;
  }
}
