// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Home from './pages/Home'; // Import Home component

const App = () => {
  return (
    <AuthProvider>
      {' '}
      {/* Wrap your app with AuthProvider */}
      <BrowserRouter>
        <div>
          <Home />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
