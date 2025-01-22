"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import {APIProvider, Map} from '@vis.gl/react-google-maps';


export default function StoreLocator() {
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);
  const googleMapsLoaded = useRef(false);

  const [location, setLocation] = useState("");

  useEffect(() => {
    if (googleMapsLoaded.current) {
      initMap();
    }
  }, [googleMapsLoaded.current]);

  const initMap = () => {
    const map = new google.maps.Map(mapRef.current, {
  
      center: { lat: 51.5074, lng: -0.1278 }, // Default center: London
      zoom: 8,
    });

    const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);

    // Bias the SearchBox results towards the map's viewport
    map.addListener("bounds_changed",()=>{
      searchBox.setBounds(map.getBounds())
    })

    const marker = new google.maps.Marker({
      map,
      draggable: true,
    });

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }

      const place = places[0];
      if (!place.geometry || !place.geometry.location) {
        console.log("Place not found");
        return;
      }

      // Update map and marker
      map.setCenter(place.geometry.location);
      map.setZoom(14);
      marker.setPosition(place.geometry.location);
    });
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
            ref={searchBoxRef}
            type="text"
            placeholder="Find nearby stores..."
            id="location"
            name="location"
            className="p-1.5 text-xl rounded-lg hover:bg-gray-200 transition-all duration-200"
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </div>
      <div
        ref={mapRef}
        className="w-screen h-screen"
      ></div>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=&libraries=places`}
        onLoad={() => (googleMapsLoaded.current = true)}
        async
      />
    </div>
  );
}
