import axios from 'axios';
import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 300 });

user.on('change', () => {
  console.log(user);
});
user.on('save', () => {
  console.log(`User saved!`, user);
});

user.save();
