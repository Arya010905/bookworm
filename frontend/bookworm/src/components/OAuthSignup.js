// OAuthSignup.js
import React from 'react';

const OAuthSignup = () => {
  const authUrl = 'PROPEL_URL'; // Replace with your actual Propel auth URL

  const handleSignup = () => {
    window.location.href = authUrl; // Redirect to the auth URL
  };

  return (
    <div>
      <h2>Sign Up with Propel</h2>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default OAuthSignup;
