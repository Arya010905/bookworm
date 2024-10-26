// OAuthRedirect.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token'); // Extract token from the URL

    if (token) {
      localStorage.setItem('token', token); // Store token securely
      navigate('/profile'); // Redirect to profile or another route
    } else {
      // Handle error or absence of token
      console.error('No token received or authentication failed.');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuthRedirect;
