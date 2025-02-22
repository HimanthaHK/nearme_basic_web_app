import React from "react";

function Header() {
  return (
    <header className="p-4 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 text-white text-left flex items-center justify-between">
      <div className="flex items-center">
        <img src="/rr.png" alt="nearMe Logo" className="w-12 h-12 mr-3" /> {/* Logo with some space to the right */}
        <h1 className="text-3xl font-mono">nearMe</h1>
      </div>
      <button className="px-6 py-2 bg-white hover:bg-blue-300 text-blue-800 font-semibold rounded-lg">
        Are You Shop Owner
      </button>
    </header>
  );
}

export default Header;
