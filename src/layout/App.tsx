import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import Home from '../components/Home/home';
import Menu from '../components/Menu/menu';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      
    </div>
  );
}

export default App;
