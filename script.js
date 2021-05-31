const userAPI = 'https://randomuser.me/api/?results=100&inc=picture,name,location&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us';
const usersEl = document.getElementById('users');
const search = document.getElementById('search');

getUsers(userAPI);
search.addEventListener('keyup', searchUser);
search.value = '';

// fetch user data
async function getUsers(url) {
  const res = await fetch(url);
  const data = await res.json();

  showUsers(data.results);
}

// display user info
function showUsers(users) {
  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('user');

    div.innerHTML += `
      <img class="avatar" src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}" width="60" height="60">
      <div class="user-info">
        <h4 class="name">${user.name.first} ${user.name.last}</h4>
        <small class="location">${user.location.city}, ${user.location.country}</small>
      </div>
    `
    usersEl.appendChild(div);
  })
}

// display search result
function searchUser(e) {
  const searchTerm = e.target.value.toUpperCase();
  const users = document.querySelectorAll('.user');
  let name, location, nameValue, locationValue;

  for ( var i = 0 ; i < users.length ; i++ ) {
    name = document.querySelectorAll('.name')[i];
    location = document.querySelectorAll('.location')[i];
    nameValue = name.innerText;
    locationValue = location.innerText;
    
    if ( nameValue.toUpperCase().indexOf(searchTerm) > -1 || locationValue.toUpperCase().indexOf(searchTerm) > -1) {
      name.parentElement.parentElement.style.display = '';
      location.parentElement.parentElement.style.display = '';
    } else {
      name.parentElement.parentElement.style.display = 'none';
      location.parentElement.parentElement.style.display = 'none';
    }
  }
}