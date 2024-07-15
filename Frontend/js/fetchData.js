import { fetchData } from './fetchData.js';

const touristPlacesContainer = document.getElementById('touristPlacesContainer');
const countriesUrl = 'https://restcountries.com/v3.1/all';

// Función para obtener y mostrar un lugar turístico aleatorio
async function mostrarLugarTuristicoAleatorio() {
    const response = await fetchData(countriesUrl);
    if (response) {
        const randomIndex = Math.floor(Math.random() * response.length);
        const country = response[randomIndex];
        const countryElement = document.createElement('div');
        countryElement.className = 'country';
        countryElement.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Región: ${country.region}</p>
            <img src="${country.flags.png}" alt="Bandera de ${country.name.common}" width="100">
        `;
        touristPlacesContainer.appendChild(countryElement);
    } else {
        touristPlacesContainer.textContent = 'Error al obtener la información. Inténtelo nuevamente.';
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarLugarTuristicoAleatorio);
