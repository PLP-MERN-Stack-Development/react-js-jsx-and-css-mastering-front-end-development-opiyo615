
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === "") return;
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mt-6">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                className="p-2 rounded-l-md w-64 text-gray-700 outline-none"
            />
            <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500"
            >
                Search
            </button>
        </form>
    );
}
