import React, { useEffect, useState } from 'react';
import { useLocation } from './LocationProvider';
import { getLocal } from '../api/route';

const LocationDisplay: React.FC = () => {
  const locationContext = useLocation();
  const location = locationContext?.location;
  const error = locationContext?.error;
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    if (location) {
      getLocal({ latitude: location.latitude, longitude: location.longitude }).then(city => {
        setCity(city);
      });
    }
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex grid gap-2 grid-cols-2">
      {/* <h3 className="text-green-800 text-md text-center">
        {city ? city : 'Loading city...'}
      </h3> */}
      <input className="text-white-900 dark:bg-gray-700 text-center" name="city" defaultValue={city ?? ''}></input>
      <button className="text-center" type="button">Reload</button>
      
    </div>
  );
};

export default LocationDisplay;