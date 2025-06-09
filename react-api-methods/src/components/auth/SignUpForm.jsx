import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Fake signup logic
    alert('Account created! Now log in.');
  };

  return (
    <form onSubmit={handleSignup} className="p-4 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
  
    <input
      className="border p-3 mb-4 block w-full"
      value=""
      placeholder="First Name"
    />
    <input
      className="border p-3 mb-4 block w-full"
      value=""
      placeholder="Last Name"
    />
    <input
      className="border p-3 mb-4 block w-full"
      value=""
      placeholder="Phone Number"
    />
    <input
      className="border p-3 mb-4 block w-full"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
    />
    <input
      type="password"
      className="border p-3 mb-4 block w-full rounded"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
  
    <button
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
      type="submit"
    >
      Sign Up
    </button>
  </form>
  
  );
};

export default SignupForm;
