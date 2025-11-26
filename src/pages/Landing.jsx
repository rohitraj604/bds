import React, { useState } from "react";
import "../styles.css";
import backgroundImage from "./dbg.jpg";
import lheart from "./lheart.png";
import hello from "./hello.gif";

// Custom CSS for loading the Pacifico font and setting up the layout
const customStyles = `
  /* Load Pacifico Font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  /* Global background and layout - Full page uses a bluish shade */
  .birthday-background {
    background-color: #e0f2fe; /* Light blueish shade */
    font-family: 'Pacifico', cursive;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box; 
  }


  /* Hover effect for the card */
  .wish-card:hover {
    transform: scale(1.02); 
  }

  /* Card Title */
  .card-title {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #4f46e5;
  }

  /* Wish Display Area */
  .wish-text-box {
    padding: 1.5rem;
   background-color: #676afcff;
    border-radius: 0.75rem; 
    color: rgba(255, 255, 255, 1); /* White text for contrast over the image */
    text-align: center;
    line-height: 1.6;
    overflow: hidden; /* Ensures borders look clean */
  }
  
  /* Text Style inside the textbox */
  .wish-paragraph {
    font-size: 1.25rem; 
    /* Strong shadow for readability over background image */
    text-shadow: 1px 1px 3px #000000, 0 0 5px rgba(0,0,0,0.8);
  }
  @media (min-width: 768px) {
    .wish-paragraph {
      font-size: 1.5rem;
    }
  }

  /* Button Container */
  .button-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  /* Base Button Styling */
  .base-button {
    padding: 0.75rem 1.5rem;
    color: white;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    outline: none;
  }
  .base-button:hover {
    transform: scale(1.05);
  }
  .base-button:focus {
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  }

  /* Next Button specific styles */
  .next-button {
    background-color: #6366f1; 
    font-size: 1.25rem; 
  }
  .next-button:hover {
    background-color: #4f46e5; 
  }
  .next-button:focus {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5); 
  }

  /* Surprise Button specific styles */
  .surprise-button {
    background-color: #ef4444; 
    font-size: 1.5rem; 
    padding: 0.75rem 2rem; 
  }
  .surprise-button:hover {
    background-color: #dc2626; 
  }
  .surprise-button:focus {
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.5); 
  }

  /* Fade transition for the wishes */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;

// --- Data for the Slideshow ---
const birthdayWishes = [
  {
    text: "Hey Chhoti Bachchi, See I've made a surprise website for you. Let's explore it. Hope you like it. Happy Birthday! ❤",
    step: 0,
  },
  {
    text: "Happy Birthday! Don't worry about getting older; you're just leveling up. Wishing you less adulting and more cake this year. Go celebrate, you legend! ❤",
    step: 1,
  },
  {
    text: "You're awesome! Wishing you a day that’s as incredible as you are. May your phone battery stay charged and your Wi-Fi be strong! Have a spectacular birthday! ❤",
    step: 2,
  },
];

// Main Component renamed to BirthdayWishes
const Landing = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    // Only proceed if there are more wishes available
    if (currentStep < birthdayWishes.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSurprise = () => {
    // Navigate to the surprise page URL
    console.log("Navigating to /surprise page...");
    window.location.href = "/surprise";
  };

  const currentWish = birthdayWishes[currentStep];
  const isLastStep = currentStep === birthdayWishes.length - 1;

  return (
    // Inject custom styles into the component
    <>
      <style>{customStyles}</style>

      {/* Main Container - Full screen, centered, now with blueish background color */}
      <div className="birthday-background">
        {/* Wish Card / Container */}
        <div
          className="wish-card"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="card-title">A Birthday Message Just For You</h1>

          {/* Wish Display Area with Fade Effect - Now with background image */}
          
        <div
          style={{
            backgroundImage: `url(${hello})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "120px",
            height: "90px",
            filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
            // boxShadow: "2px 2px 2px solid #000",
            position: "absolute",
            right: "10px",
            top: "55px"
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${hello})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "120px",
            height: "90px",
            filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",
            // boxShadow: "2px 2px 2px solid #000",
            position: "absolute",
            left: "10px",
            top: "55px"
          }}
        ></div>
          <div
            key={currentStep} // Key changes on step change, forcing a re-render and transition
            className="wish-text-box fade-enter-active"
          >
            {/* The actual "textbox" content */}
            <p className="wish-paragraph">{currentWish.text}</p>
          </div>

          {/* Navigation/Action Button */}
          <div className="button-container">
            {isLastStep ? (
              // Button for the last step (Navigate to /surprise)
              <button
                onClick={handleSurprise}
                className="base-button surprise-button"
              >
                Reveal Your Surprise!
              </button>
            ) : (
              // Button for intermediate steps (Next Wish)
              <button onClick={handleNext} className="base-button next-button">
                {" "}
                Next &gt;&gt;&gt;
                {/* Next Wish ({currentStep + 1} of {birthdayWishes.length}) */}
              </button>
            )}
          </div>
        <div
          style={{
            backgroundImage: `url(${lheart})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "245px",
            height: "105px",
            position: "absolute",
            bottom: "5px",
            right: "5px"
          }}
        ></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
