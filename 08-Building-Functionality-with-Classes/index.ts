// Classes

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('BEEP');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.honk();
    this.drive();
  }
}

const car = new Car(4, 'gray');
console.log(car.color);
