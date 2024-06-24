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
        src="https://i.pinimg.com/564x/ea/e3/4e/eae34e10805fc8641c0ca7cbe3dd7ca5.jpg"
        alt="image__"
        className="card-image"
      />
      <div className="card-content-container">
        <h1>Plans Card</h1>
        <p>{/* Add your paragraph content here */}</p>
        <div className="card-button">
          <div className="card-button-container" onClick={handleClick}>
            <button className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
              <div className="text">BROWSE PLAN</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
