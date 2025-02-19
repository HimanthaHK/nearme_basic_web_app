import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (email and password should not be empty)
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Dummy authentication (In a real app, this should be checked against a backend)
    if (email === "user@example.com" && password === "password123") {
      setError("");
      onLogin({ email });
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
