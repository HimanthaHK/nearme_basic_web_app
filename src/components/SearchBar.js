import React, { useState } from "react";

function SearchBar({ setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Clears the search query
  };

  return (
    <div className="p-4 max-w-xl mx-auto flex items-center">
      <input
        type="text"
        placeholder="Search for shops..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onChange={handleSearchChange}
      />
      <button
        onClick={handleClearSearch}
        className="ml-2 p-3 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
