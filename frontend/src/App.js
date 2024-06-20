import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slide from './components/Slide';


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <Slide />
    </div>
  );
}

export default App;
