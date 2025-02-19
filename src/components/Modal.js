import React from "react";

function Modal({ shop, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold">{shop.name}</h2>
        <p className="text-gray-600">Location: {shop.location}</p>
        <p className="text-gray-600">Category: {shop.category}</p>
        <p className="mt-2 text-gray-800">{shop.description}</p>
        <p className="mt-2 text-gray-600">Contact: {shop.contact}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
