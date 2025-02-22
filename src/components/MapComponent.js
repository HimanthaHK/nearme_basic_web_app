import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "200px", width: "300px" }}
      className="rounded-lg shadow-lg mx-auto"
    >
      {/* OpenStreetMap Tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker at provided location */}
      <Marker position={[latitude, longitude]}>
        <Popup>Shop Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
