import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 47.3987, lng: 8.5335 }), []);

  return (
    <div className="h-144 w-full">
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <GoogleMap
          mapContainerClassName="h-full  rounded-md shadow-lg "
          center={center}
          zoom={14}
        >
          <Marker position={{ lat: 47.3987, lng: 8.5335 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
