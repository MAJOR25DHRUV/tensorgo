import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import BrowseCard from "./components/BrowseCard";
import PlansCard from "./components/PlansCard";
// import Basic from './components/Basic';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);


  return (
    <div className="app-container">
      <div className="nav-content">
        <Header />
        <Navbar />
        <Slide />
      </div>
      
      
      {isClicked ? <div className="plansCard-container">
      <PlansCard title="Basic" content=""/>
      <PlansCard title="Standard" content=""/>
      <PlansCard title="Premium" content=""/>
      </div> :  <BrowseCard isClicked={isClicked} setIsClicked={setIsClicked}/> }
    </div>
  );
};

export default App;
