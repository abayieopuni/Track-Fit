import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero'; // Import your Hero component
import Main from './Main'; // Import your Main component

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Route for Hero component */}
        <Route path="/main" element={<Main />} />{' '}
        {/* Route for Main component */}
      </Routes>
    </div>
  );
};

export default Home;
