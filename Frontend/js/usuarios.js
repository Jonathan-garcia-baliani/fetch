import { fetchData } from './fetchData.js';

const url = 'https://jsonplaceholder.typicode.com/users/';

const mostrarData = (data) => {
    let body = "";
    data.forEach((usuario) => {
        body += `<tr><td>${usuario.id}</td><td>${usuario.name}</td><td>${usuario.email}</td></tr>`;
    });
    document.getElementById('data').innerHTML = body;
}

fetchData(url)
    .then(data => mostrarData(data))
    .catch(error => console.log(error));
