import { fetchData } from './fetchData.js';

const registerForm = document.getElementById('registerForm');
const mensajeDiv = document.getElementById('mensaje');

// URL base de la API
const baseUrl = 'http://localhost:3000';
const registerUrl = `${baseUrl}/api/register`;

// Función para manejar el registro de usuario
async function registrarUsuario(event) {
    event.preventDefault();

    const userData = {
        username: registerForm.username.value,
        password: registerForm.password.value,
        email: registerForm.email.value,
        age: registerForm.age.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    const response = await fetchData(registerUrl, options);
    if (response) {
        mensajeDiv.textContent = response.message;
        mensajeDiv.style.color = 'green';
        if (response.redirectUrl) {
            setTimeout(() => {
                window.location.href = response.redirectUrl;
            }, 2000); // Redirigir después de 2 segundos
        }
    } else {
        mensajeDiv.textContent = 'Error al registrar el usuario. Inténtelo nuevamente.';
        mensajeDiv.style.color = 'red';
    }
}

// Agregar event listener al formulario
registerForm.addEventListener('submit', registrarUsuario);
