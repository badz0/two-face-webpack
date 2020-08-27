// import avatar from '../images/img_avatar.png';

function renderUsers(users = []) {
  const container = document.querySelector('.users');
  container.innerHTML = '';

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.className = 'user';
    {/* <img src="${avatar}" /> */}
    userElement.innerHTML = `
      <h3>${user.name}</h3>
      <h4>${user.email}</h4>
    `;
    container.append(userElement);
  });
}

export default renderUsers;
