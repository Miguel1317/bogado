import { useState } from 'react'
import './App.css'
import Navbarr from './components/navbarr'
import Hero from './components/hero';
import About from './components/about';
import Work from './components/trabajo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
