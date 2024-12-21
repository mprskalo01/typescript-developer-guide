import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class User implements Mappable {
  color: 'red';
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName('male');
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `<h1>User name: ${this.name}</h1>`;
  }
}
