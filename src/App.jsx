import { useState } from 'react';
import './App.css';
import "@tailwindplus/elements";
import Header from './components/header/Header.jsx';
import HeroSection from './components/hero-section/HeroSection.jsx';
import Products from './components/products/Products.jsx';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Products />
    </>
  );
};

export default App;
