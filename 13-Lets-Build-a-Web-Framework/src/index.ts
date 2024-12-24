import { User } from './models/User';

const user = new User({ name: 'mario', age: 23 });

// user.set({ name: 'Prskalo'});

console.log(user.get('name'));
console.log(user.get('age'));
