'use client';
// import { useLocation } from './LocationProvider';
import LocationDisplay from "./LocationDisplay";
import WeatherBlock from "./WeatherBlock";

export default function TitleBlock() {
    // const locationContext = useLocation();
    // const latitude = locationContext?.location?.latitude;
    // const longitude = locationContext?.location?.longitude;
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-5">
                <span className="text-purple-500">air check</span>
            </h1>
            <LocationDisplay />
            <WeatherBlock />
        </div>
    );
}