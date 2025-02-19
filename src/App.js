import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopList from "./components/ShopList";
import SearchBar from "./components/SearchBar";
import { MapPinIcon } from "@heroicons/react/24/outline";

// Mock data for shops (add lat/long to each shop)
const shops = [
  { id: 1, name: "Tech Hub", distance: "1.2 km", location: "Colombo", lat: 6.9271, lon: 79.8612 },
  { id: 2, name: "Gadget Galaxy", distance: "3.5 km", location: "Kandy", lat: 7.2906, lon: 80.6337 },
  { id: 3, name: "Smart Store", distance: "0.8 km", location: "Galle", lat: 6.0482, lon: 80.2200 },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to calculate distance between two lat/lon points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  // Filter shops based on search and distance
  const filteredShops = shops.filter((shop) => {
    const isMatch =
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (userLocation) {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lon,
        shop.lat,
        shop.lon
      );
      return isMatch && distance <= 10; // Display shops within 10 km
    }
    return isMatch;
  });

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold text-blue-600 flex justify-center items-center">
          <MapPinIcon className="w-8 h-8 mr-2" />
          Welcome to nearMe!
        </h1>
        <p className="text-lg mt-2 text-gray-700">Find shops near you with ease.</p>
      </div>
      <ShopList shops={filteredShops} />
      <Footer />
    </div>
  );
}

export default App;
