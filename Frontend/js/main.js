import { fetchData } from './fetchData.js';

const touristPlacesContainer = document.getElementById('touristPlacesContainer');
const countriesUrl = 'https://restcountries.com/v3.1/all';

const cryptoContainer = document.getElementById('cryptoContainer');
const cryptoApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';

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

// Función para mostrar precios de criptomonedas
async function mostrarPrecios() {
    console.log('Fetching data from CoinGecko API...');
    const data = await fetchData(cryptoApiUrl);
    console.log('Data received:', data);
    if (data) {
        const bitcoinPrice = data.bitcoin.usd;
        const ethereumPrice = data.ethereum.usd;

        const cryptoElement = document.createElement('div');
        cryptoElement.className = 'crypto';
        cryptoElement.innerHTML = `
            <p>Bitcoin: $${bitcoinPrice} USD</p>
            <p>Ethereum: $${ethereumPrice} USD</p>
        `;

        cryptoContainer.appendChild(cryptoElement);
    } else {
        cryptoContainer.textContent = 'Error al obtener la información. Inténtelo nuevamente.';
    }
}

// Llamar a las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarLugarTuristicoAleatorio();
    mostrarPrecios();
});
