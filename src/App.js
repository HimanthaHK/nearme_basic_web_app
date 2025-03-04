import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopList from "./components/ShopList";
import SearchBar from "./components/SearchBar";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Modal from "./components/Modal";
import MapComponent from "./components/MapComponent";

{/* Example Usage */}
<MapComponent latitude={6.9271} longitude={79.8612} />


// Mock data for shops with items sold
const shops = [
  {
    id: 1,
    name: "Tech Hub",
    location: "Colombo",
    category: "Electronics",
    description: "Your one-stop shop for all tech gadgets.",
    contact: "123-456-7890",
    items: ["Laptop", "Smartphone", "Headphones"],
    latitude: 6.9271,
    longitude: 79.8612,
  },
  {
    id: 2,
    name: "Gadget Galaxy",
    location: "Kandy",
    category: "Electronics",
    description: "Latest gadgets at great prices.",
    contact: "234-567-8901",
    items: ["Smartwatch", "Bluetooth Speaker", "Tablet"],
    latitude: 7.2906,
    longitude: 80.6337,
  },
  {
    id: 3,
    name: "Smart Store",
    location: "Galle",
    category: "Electronics",
    description: "Smart home gadgets and devices.",
    contact: "345-678-9012",
    items: ["Smart Light", "Smart Thermostat", "Security Camera"],
    latitude: 6.0326,
    longitude: 80.2168,
  },
  {
    id: 4,
    name: "Fashion Haven",
    location: "Colombo",
    category: "Clothing",
    description: "Trendy fashion for all ages.",
    contact: "456-789-0123",
    items: ["T-Shirt", "Jeans", "Shoes"],
    latitude: 6.9271,
    longitude: 79.8612,
  },
  {
    id: 5,
    name: "Style Street",
    location: "Kandy",
    category: "Clothing",
    description: "Your go-to clothing store for style.",
    contact: "567-890-1234",
    items: ["Jacket", "Sunglasses", "Hat"],
    latitude: 7.2906,
    longitude: 80.6337,
  },
];




function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShop, setSelectedShop] = useState(null);

  // Filter shops based on search query, location, and category
  const filteredShops = shops.filter((shop) => {
    // Check if the search query matches any of the items in the shop
    const matchesSearch = shop.items.some((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      matchesSearch &&
      (selectedLocation ? shop.location === selectedLocation : true) &&
      (selectedCategory ? shop.category === selectedCategory : true)
    );
  });

  // Handle shop click to open modal
  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  // Close modal
  const closeModal = () => {
    setSelectedShop(null);
  };

  return (
    

    
    <div>
      <Header />
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold text-blue-600 flex justify-center items-center">
          <MapPinIcon className="w-8 h-8 mr-2" />
          Welcome to nearMe!
        </h1>
        <p className="text-lg mt-2 text-gray-700">Find shops near you with ease.</p>
      </div>
      <div className="p-4">
        <SearchBar setSearchQuery={setSearchQuery} />

        {/* Filters Section */}
        <div className="mt-4 flex justify-between gap-4">
          <div>
            <label htmlFor="location" className="text-gray-700">Location:</label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="ml-2 border border-gray-300 rounded-lg p-2"
            >
              <option value="">All</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="category" className="text-gray-700">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="ml-2 border border-gray-300 rounded-lg p-2"
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>
        </div>
      </div>

   

      {/* Shop List */}
      <ShopList shops={filteredShops} onShopClick={handleShopClick} />

      {/* Modal for Shop Details */}
      {selectedShop && <Modal shop={selectedShop} onClose={closeModal} />}

      <Footer />
    </div>
    
  );
}

export default App;
