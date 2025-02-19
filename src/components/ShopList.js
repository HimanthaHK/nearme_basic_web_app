import React from "react";

// Mock data for shops
const shops = [
  { id: 1, name: "Tech Hub", distance: "1.2 km", location: "Colombo" },
  { id: 2, name: "Gadget Galaxy", distance: "3.5 km", location: "Kandy" },
  { id: 3, name: "Smart Store", distance: "0.8 km", location: "Galle" },
];

function ShopList() {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Nearby Shops</h2>
      <ul className="space-y-4">
        {shops.map((shop) => (
          <li key={shop.id} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:bg-blue-100 transition duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">{shop.name}</h3>
                <p className="text-gray-600">{shop.location}</p>
              </div>
              <div>
                <p className="text-gray-500">{shop.distance}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopList;
