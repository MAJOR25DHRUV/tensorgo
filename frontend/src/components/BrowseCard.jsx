import React, { useEffect } from "react";
import "./BrowseCard.css";

const BrowseCard = ({ isClicked, setIsClicked }) => {
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <div className="browseCard-container">
      <img
        src="https://images.tv9hindi.com/wp-content/uploads/2023/06/amy-aela-looks.jpg"
        alt="image__"
        className="card-image"
      />
      <div className="card-content-container">
        <h1>Plans Card</h1>
        <p>
          
        </p>
        <div className="card-button">
          <div className="card-button-container" onClick={handleClick}>
            <button className="button">
              BROWSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
