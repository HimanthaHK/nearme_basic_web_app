import React from "react";
import MapComponent from "./MapComponent";

const Modal = ({ shop, onClose }) => {
  if (!shop) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold">{shop.name}</h2>
        <p>{shop.description}</p>
        <p className="text-gray-700"><strong>Location:</strong> {shop.location}</p>
        <p className="text-gray-700"><strong>Category:</strong> {shop.category}</p>
        <p className="text-gray-700"><strong>Contact:</strong> {shop.contact}</p>

        {/* Map Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Shop Location:</h3>
          <MapComponent latitude={shop.latitude} longitude={shop.longitude} />
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
