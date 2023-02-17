import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About/about';
import Home from '../components/Home/home';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
