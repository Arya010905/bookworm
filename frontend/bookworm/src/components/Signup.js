import React from 'react';

const Signup = () => {
  const handleSignup = () => {
    // Here you would typically handle the OAuth signup process,
    // such as redirecting to the OAuth provider.
    window.location.href = 'PROPEL_URL'; // Replace with your actual OAuth signup URL
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <button onClick={handleSignup}>Sign Up with OAuth</button>
    </div>
  );
};

export default Signup;
