import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from '../components/Home/home';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Routes>
      <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
  );
}

export default App;
