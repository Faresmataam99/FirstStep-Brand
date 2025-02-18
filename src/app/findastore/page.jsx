"use client"

import dynamic from 'next/dynamic';

// Dynamically import MapContainer and other Leaflet components
const MapContainerWithNoSSR = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const Polygon = dynamic(() => import("react-leaflet").then((mod) => mod.Polygon), { ssr: false });
const useMapEvents = dynamic(() => import("react-leaflet").then((mod) => mod.useMapEvents), { ssr: false });

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

import { useEffect, useState } from "react";

const algeriaTerritory = [
  [36.75, 3.06], // Algiers
  [36.77, 3.08],
  [36.78, 3.07],
  [36.76, 3.05],
];


export default function StoreLocator() {
  const [location, setLocation] = useState("");
  const [mapCenter, setMapCenter] = useState([36.75, 3.06]); // Default to Algiers
  const [zoom, setZoom] = useState(8); // Default zoom level

  const onMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setMapCenter([lat, lng]); // Update map center to the clicked position
    setZoom(14); // Zoom in when clicking on the map
  };

  const LocationSearchBox = () => {
    useMapEvents({
      click: onMapClick,
    });

    useEffect(() => {
      if (location) {
        // Simulate a location search (we can implement actual geocoding here)
        setMapCenter([36.75, 3.06]);
        setZoom(14);
      }
    }, [location]);

    return null; // Since we're using useMapEvents, we don't need to render anything here
  };

  return (
    <div className="flex items-center gap-6 flex-col">
      <p className="text-xl font-semi-bold">Find the nearest Store:</p>

      <div className="flex items-center justify-center">
        <form>
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <input
            type="text"
            placeholder="Find nearby stores..."
            id="location"
            name="location"
            className="p-1.5 text-xl rounded-lg hover:bg-gray-200 transition-all duration-200"
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </div>

      {/* Leaflet Map */}
      <MapContainerWithNoSSR
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        {/* Tile Layer from OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Example marker in Algiers */}
        <Marker position={mapCenter}>
          <Popup>Brand zone Store in Algiers</Popup>
        </Marker>
        
        {/* Example Territory (Polygon) for Algeria */}
        <Polygon positions={algeriaTerritory} color="blue" weight={2}>
          <Popup>Algiers Territory</Popup>
        </Polygon>
        
        <LocationSearchBox /> {/* Search Box for interacting with the map */}
      </MapContainerWithNoSSR>
    </div>
  );
}
