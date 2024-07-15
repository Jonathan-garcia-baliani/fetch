import { fetchData } from './fetchData.js';

// URL base de la API
const baseUrl = 'http://localhost:3000';

// URL para registrar usuario
const registerUrl = `${baseUrl}/api/register`;

// URL para iniciar sesión
const loginUrl = `${baseUrl}/api/login`;

// Función para registrar un usuario
async function registrarUsuario(userData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    const response = await fetchData(registerUrl, options);
    if (response) {
        console.log('Usuario registrado:', response);
        window.location.href = response.redirectUrl;
    }
}

// Función para iniciar sesión
async function iniciarSesion(credentials) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    };
    const response = await fetchData(loginUrl, options);
    if (response) {
        console.log('Sesión iniciada:', response);
        window.location.href = response.redirectUrl;
    }
}

// Ejemplo de uso
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userData = {
        username: event.target.username.value,
        password: event.target.password.value,
        email: event.target.email.value,
        age: event.target.age.value
    };
    await registrarUsuario(userData);
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const credentials = {
        username: event.target.username.value,
        password: event.target.password.value
    };
    await iniciarSesion(credentials);
});
