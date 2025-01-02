import React, { useEffect, useState } from 'react';
import { useLocation } from './LocationProvider';
import { getWeather } from '../api/route';

type Weather = {
    temperature: number;
    windspeed: number;
    humidity: number;
}

const WeatherBlock: React.FC = () => {
    const locationContext = useLocation();
    const location = locationContext?.location;
    const error = locationContext?.error;
    const [weather, setWeather] = useState<Weather | null>(null);

    useEffect(() => {
        if (location) {
            getWeather({ latitude: location.latitude, longitude: location.longitude }).then(weather => {
                setWeather(weather);
            });
        }
    })

    if (error) {
        return <div>Issue retrieving weather data</div>
    }

    if (!weather?.temperature) {
        return <div>Loading...</div>
    }
    if (!weather?.windspeed) {
        return <div>Loading...</div>
    }
    if (!weather?.humidity) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="flex grid gap-2 grid-cols-2 text-center p-5">
                <p>{Math.round(weather?.temperature)}
                    <button
                        type="button"
                        className="inline-block rounded px-1 pb-1 pt-1 text-md text-gray-100/50 focus:text-white focus:text-lg focus:font-bold">
                        &#8451;
                        </button>
                    <button
                        type="button"
                        className="inline-block rounded px-1 pb-1 pt-1 text-md text-gray-100/50 focus:text-white focus:text-lg focus:font-bold">
                        &#8457;
                    </button>
                </p>
                <p>{Math.round(weather?.windspeed)}
                    <button
                        type="button"
                        className="inline-block rounded px-1 pb-1 pt-1 text-md text-gray-100/50 focus:text-white focus:text-lg focus:font-bold">
                        kph
                        </button>
                    <button
                        type="button"
                        className="inline-block rounded px-1 pb-1 pt-1 text-md text-gray-100/50 focus:text-white focus:text-lg focus:font-bold">
                        mph
                    </button>
                </p>
            </div>
            <div>
                <p>Humidity: {weather?.humidity}</p>
            </div>
        </div>
    )
};

export default WeatherBlock;