// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode'; // Importing all functions as jwt_decode

const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores the authenticated user
  const [token, setToken] = useState(localStorage.getItem('token')); // Stores the access token
  const [role, setRole] = useState(localStorage.getItem('role')); // Stores the user role (admin/user)
  const [loading, setLoading] = useState(true); // Loading state for fetching user data

  useEffect(() => {
    if (token) {
      // Use jwt_decode.decode() to extract the user role and other info from the JWT token
      const decodedToken = jwt_decode.decode(token); // Use decode function from jwt-decode
      setRole(decodedToken.role); // Extract the role (admin or user)
      fetchUser(decodedToken.userId); // Fetch user data using userId from token
    } else {
      setLoading(false);
    }
  }, [token]);

  // Fetch user data from API (e.g., user profile)
  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  // Handle token refresh if the access token is expired
  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/api/auth/refresh-token', {
      refreshToken,
    });
    setToken(response.data.accessToken);
    localStorage.setItem('token', response.data.accessToken);
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setToken(response.data.accessToken);
      setRole(response.data.role); // Store the role (admin or user)
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      fetchUser(response.data.userId);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('refreshToken');
  };

  // Check if user is admin
  const isAdmin = role === 'admin';

  const value = {
    user,
    token,
    role,
    login,
    logout,
    loading,
    isAdmin, // Expose the role check for components that need it
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


