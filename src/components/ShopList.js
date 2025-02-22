import React from "react";

function ShopList({ shops, onShopClick }) {
  return (
    <div className="p-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {shops.length === 0 ? (
        <p className="text-center text-xl text-gray-700">No shops found.</p>
      ) : (
        shops.map((shop) => (
          <div
            key={shop.id}
            className="border rounded-lg p-4 hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-blue-600">{shop.name}</h2>
            <p className="text-gray-700">{shop.category}</p>
            <p className="text-sm text-gray-500">{shop.location}</p>
            <p className="mt-2 text-gray-600">{shop.description}</p>

            {/* View on Map Button */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => onShopClick(shop)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View Details
              </button>
              <a
                href={`https://www.google.com/maps?q=${shop.latitude},${shop.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                View on Map
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShopList;
