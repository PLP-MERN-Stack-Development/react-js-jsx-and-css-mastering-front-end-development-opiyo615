

const API_KEY = "YOUR_API_KEY"; // Get one from openweathermap.org
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCity(city) {
    const response = await fetch(
        ${ BASE_URL } ? q = ${ city } & appid=${ API_KEY } & units=metric
    );
    if (!response.ok) throw new Error("Failed to fetch weather");
    return await response.json();
}