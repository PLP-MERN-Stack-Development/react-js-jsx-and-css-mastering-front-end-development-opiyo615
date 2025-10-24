
Jsx
import { useState } from "react";
import { getWeatherByCity } from "../api/weatherApi";

export function useFetchWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherByCity(city);
            setWeather(data);
        } catch (err) {
            setError("City not found. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { weather, loading, error, fetchWeather };
}
