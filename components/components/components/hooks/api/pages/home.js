
import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useFetchWeather } from "../hooks/useFetchWeather";

export default function Home() {
    const { weather, loading, error, fetchWeather } = useFetchWeather();

    return (
        <div className="p-6 text-center">
            <SearchBar onSearch={fetchWeather} />

            {loading && <p className="mt-6 text-lg">Fetching weather data...</p>}
            {error && <p className="mt-6 text-red-300">{error}</p>}
            {weather && !loading && <WeatherCard weather={weather} />}
        </div>
    );
}
