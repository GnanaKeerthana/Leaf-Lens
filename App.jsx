import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is in components folder
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> 
    </div>
  );
};

export default App;
