// Annotations Around Functions

const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void and Never
// type of void means that there is no return expected
const logger = (message: string): void => {
  console.log(message);
};

// type of never is rarely used and expects to never reach a return
const throwError = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

// Destructuring with Annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// Annotations Around Objects

const profile = {
  name: 'Mario',
  age: 20,
  coords: {
    lat: 15,
    lng: 47,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
