import { useState } from "react";


const PlansCard = ({title, content}) => {
  const [cardClicked, setCardClicked] = useState(false);

  const handleCardClick = () => {
    setCardClicked(!cardClicked);
  }

  return (
    <div className={cardClicked? "plansCard-content-container" : ""}>
    <div class={cardClicked ? "card-position" : "card"} onClick={handleCardClick}>
  <div class="content">
    <div class="back">
      <div class="back-content">
      <svg height="200px" width="200px" version="1.1" id="people" viewBox="0 0 32 32" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <style type="text/css">
        {`
          .st0 { opacity: 0.2; fill: #ffffff; }
          .st1 { fill: #ffffff; }
          .st2 { opacity: 0.2; }
        `}
      </style>
      <g id="male_x5F_student">
        <g>
          <g>
            <g>
              <path className="st1" d="M16,25.2c-3.7,0-6.6-3-6.6-6.6V15c0-3.7,3-6.6,6.6-6.6s6.6,3,6.6,6.6v3.5C22.6,22.2,19.7,25.2,16,25.2z M16,9.4c-3.1,0-5.6,2.5-5.6,5.6v3.5c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6V15C21.6,11.9,19.1,9.4,16,9.4z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className="st1" d="M9.6,20.1c-0.3,0-0.7-0.1-1-0.4c-0.4-0.3-0.7-0.8-0.9-1.3c-0.2-0.6-0.2-1.1-0.1-1.6c0.1-0.6,0.5-1,1-1.2c0.5-0.2,1.2,0,1.7,0.5l-0.7,0.8c-0.2-0.2-0.4-0.3-0.6-0.2c-0.2,0.1-0.3,0.3-0.3,0.4c-0.1,0.3,0,0.7,0.1,1c0.1,0.4,0.3,0.7,0.6,0.8C9.3,18.9,9.5,19,9.7,19l0.4,1C9.9,20,9.7,20.1,9.6,20.1z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className="st1" d="M22.4,20.1c-0.2,0-0.3,0-0.4-0.1l0.4-1c0.2,0.1,0.4-0.1,0.5-0.1c0.2-0.2,0.5-0.5,0.6-0.8c0.1-0.4,0.2-0.7,0.1-1c0-0.1-0.1-0.3-0.3-0.4c-0.2-0.1-0.4,0-0.6,0.2L21.9,16c0.5-0.5,1.1-0.7,1.7-0.5c0.5,0.2,0.8,0.6,1,1.2c0.1,0.5,0.1,1.1-0.1,1.6c-0.2,0.6-0.5,1-0.9,1.3C23.1,19.9,22.8,20.1,22.4,20.1z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className="st1" d="M19.4,17.4c-0.1,0-0.2-0.1-0.3-0.3c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.4-0.3-0.4c0,0,0,0,0,0c-0.4,0-0.8,0.4-0.8,0.8c-0.1,0.6,0.4,1.1,1,1c0.4,0,0.7-0.3,0.8-0.6c0,0,0,0,0,0C19.9,17.7,19.7,17.5,19.4,17.4C19.5,17.4,19.5,17.4,19.4,17.4z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className="st1" d="M13.6,17.4c-0.1,0-0.2-0.1-0.3-0.3c0-0.1,0-0.1,0-0.2c0-0.2-0.1-0.4-0.3-0.4c0,0,0,0,0,0c-0.4,0-0.8,0.4-0.8,0.8c-0.1,0.6,0.4,1.1,1,1c0.4,0,0.7-0.3,0.8-0.6c0,0,0,0,0,0C14.1,17.7,13.9,17.5,13.6,17.4C13.7,17.4,13.7,17.4,13.6,17.4z"></path>
            </g>
          </g>
          <g>
            <g>
              <path className="st1" d="M16,30.6c-4,0-7.1-1.7-7.1-4c0-1.3,1-2.4,2.8-3.2c0.7-0.3,1.5-0.1,1.9,0.5l2.4,2.9l2.4-3c0.5-0.6,1.3-0.8,1.9-0.4c0,0,0.1,0,0.1,0c1.7,0.7,2.7,1.9,2.7,3.1C23.1,28.9,20,30.6,16,30.6z M12.4,24.4c-0.1,0-0.1,0-0.2,0C10.8,25,10,25.9,10,26.7c0,1.4,2.4,2.9,6,2.9s6-1.5,6-2.9c0-0.8-0.8-1.6-2-2.1c0,0-0.1,0-0.1-0.1c-0.2-0.1-0.5,0-0.6,0.1v0l-3.2,4l-3.2-3.9C12.7,24.5,12.5,24.4,12.4,24.4z"></path>
            </g>
          </g>
          <g>
            <g>
              <circle className="st1" cx="16" cy="23" r="0.5"></circle>
            </g>
          </g>
        </g>
        <path className="st1" d="M15.8,6.5c-3.6,0.1-6.4,3.3-6.4,6.9v5.9h1.1v-1.9c0-2.1,0.7-4.2,1.9-5.9c0.7,2.3,2.6,4.1,5,4.6c-1.9-0.9-3.2-2.7-3.6-4.8l0.8,1.1c1.6,2.3,4.3,3.7,7.1,3.7v3.1h1.1v-6.2C22.6,9.4,19.6,6.4,15.8,6.5z"></path>
        <g>
          <g>
            <path className="st1" d="M17.7,19.2c-0.2-0.3-0.6-0.5-1-0.5c-0.5,0-1.2-0.1-1.7-0.2c-0.4-0.1-0.8,0-1.1,0.3c-0.5,0.5-0.5,1.2,0,1.8c0.2,0.2,0.5,0.4,0.7,0.6c0.9,0.4,1.9,0.4,2.7-0.2C18,20.6,18.2,19.8,17.7,19.2z M16.7,20.3c-0.3,0-0.6,0-0.9,0c-0.3,0-0.7-0.1-0.9-0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0-0.2,0.2-0.4,0.5-0.4l1.7,0.1c0.2,0,0.4,0.2,0.4,0.5C17,20.1,16.9,20.3,16.7,20.3z"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
        <strong>{title}</strong>
      </div>
    </div>
  </div>
</div>
{cardClicked && (<div className={cardClicked ? "plans-container-visible" : "plans-container"}>
      {content}
      <div className="cart-button">
          <div className="cart-button-container">
            <button className="button">
              Add to Cart
            </button>
          </div>
        </div>
</div> )}

</div>
  )
}

export default PlansCard
