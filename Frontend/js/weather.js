import { fetchData } from './fetchData.js';

const apiKey = 'a9a1c9e06ca6bfc017054f194b316198'; // Tu API Key de OpenWeatherMap
const cities = ['Buenos Aires,AR', 'Lima,PE', 'Santiago,CL']; // Ejemplo de ciudades latinoamericanas

async function obtenerClima(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const data = await fetchData(url);
        return data;
    } catch (error) {
        console.error(`Error al obtener el clima para ${city}:`, error);
        return null;
    }
}

async function mostrarClima() {
    const weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML = '';

    for (const city of cities) {
        const data = await obtenerClima(city);
        if (data) {
            const cityElement = document.createElement('div');
            cityElement.className = 'col-md-4';
            cityElement.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">${data.name}</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title pricing-card-title">Temperatura: ${data.main.temp}°C</h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Clima: ${data.weather[0].description}</li>
                            <li>Humedad: ${data.main.humidity}%</li>
                            <li>Viento: ${data.wind.speed} m/s</li>
                        </ul>
                    </div>
                </div>
            `;
            weatherContainer.appendChild(cityElement);
        } else {
            const errorElement = document.createElement('div');
            errorElement.className = 'col-md-4';
            errorElement.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Error</h4>
                    </div>
                    <div class="card-body">
                        <p>No se pudo obtener la información del clima para ${city}. Inténtelo nuevamente.</p>
                    </div>
                </div>
            `;
            weatherContainer.appendChild(errorElement);
        }
    }
}

document.addEventListener('DOMContentLoaded', mostrarClima);
