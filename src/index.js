import users from './users';
import './styles/index.css';

users().then((data) => {
  console.log('data: ', data);
});
console.log('HELLO cursor');
