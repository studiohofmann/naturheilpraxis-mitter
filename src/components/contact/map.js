import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 47.3795268387307,
      lng: 8.528042368774953,
    },
    zoom: 16,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={47.37955589837335}
          lng={8.528042368774953}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
