import usersModule from './users';
import renderUsers from './view';
import './users.css';

export default function() {
  usersModule.getUsers().then(renderUsers);
}


