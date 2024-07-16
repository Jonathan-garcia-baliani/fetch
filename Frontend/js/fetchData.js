// fetchData.js y funciones adicionales combinadas en un solo archivo

// Asegúrate de que el archivo comienza con la exportación de la función fetchData
export async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Error al realizar la solicitud');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Función para obtener y mostrar un lugar turístico aleatorio
async function mostrarLugarTuristicoAleatorio() {
    const countriesUrl = 'https://restcountries.com/v3.1/all';
    const touristPlacesContainer = document.getElementById('touristPlacesContainer');
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
    const cryptoApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';
    const cryptoContainer = document.getElementById('cryptoContainer');
    console.log('Fetching data from CoinGecko API...');
    const data = await fetchData(cryptoApiUrl);
    console.log('Data received:', data);
    if (data) {
        const bitcoinPrice = data.bitcoin.usd;
        const ethereumPrice = data.ethereum.usd;

        const bitcoinElement = document.createElement('div');
        bitcoinElement.className = 'crypto';
        bitcoinElement.innerHTML = `
            <h3>Bitcoin</h3>
            <p>Precio: $${bitcoinPrice} USD</p>
        `;

        const ethereumElement = document.createElement('div');
        ethereumElement.className = 'crypto';
        ethereumElement.innerHTML = `
            <h3>Ethereum</h3>
            <p>Precio: $${ethereumPrice} USD</p>
        `;

        cryptoContainer.appendChild(bitcoinElement);
        cryptoContainer.appendChild(ethereumElement);
    } else {
        cryptoContainer.textContent = 'Error al obtener la información. Inténtelo nuevamente.';
    }
}

// Llamar a las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarLugarTuristicoAleatorio();
    mostrarPrecios();
});
