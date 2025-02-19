import React, { useState } from "react";

function SearchBar({ setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search for shops..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
