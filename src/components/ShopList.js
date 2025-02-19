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
            onClick={() => onShopClick(shop)}
          >
            <h2 className="text-xl font-semibold text-blue-600">{shop.name}</h2>
            <p className="text-gray-700">{shop.category}</p>
            <p className="text-sm text-gray-500">{shop.location}</p>
            <p className="mt-2 text-gray-600">{shop.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ShopList;
