import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Basic from './components/Basic';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Slide />
      <div className="body-container">
        <Basic />
      </div>
    </div>
  );
}

export default App;
