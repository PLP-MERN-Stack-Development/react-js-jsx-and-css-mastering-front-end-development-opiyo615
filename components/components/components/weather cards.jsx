
import React from "react";

export default function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl mt-8 text-center max-w-sm mx-auto">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <img
                src={https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png}
            alt="weather icon"
            className="mx-auto"
      />
            <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
            <div className="flex justify-around mt-4 text-sm">
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>
        </div>
    );
}