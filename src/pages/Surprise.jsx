import React, { useState } from "react";
import Confetti from "react-confetti";
import "../styles.css";
import decorImage from "./decor.png";
import hKitty from "./hkitty.gif";
import hBds from "./hbds.mp3";
import lheart from "./lheart.png";
import chipchip from "./chipchip.gif";
import "./cake.css";
import { useNavigate } from "react-router-dom";
import { Font } from "three/examples/jsm/Addons.js";

export default function Surprise() {
  const [lightsOn, setLightsOn] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [decor, setDecor] = useState(false);
  const [balloons, setBalloons] = useState(false);
  const [cake, setCake] = useState(false);
  const [cutting, setCutting] = useState(false);
  const [split, setSplit] = useState(false);
  const [flbox, setFlbox] = useState(false);

  const navigate = useNavigate();
  const gtBTree = () => {
    window.location.href = "/happybday-main/index.html";
  };

  const dBg = "./dbg.jpg";
  const handleCutCake = () => {
    // Start the cutting animation
    setCutting(true);

    // After 1.5 seconds, complete the cut and reveal the split and next steps
    setTimeout(() => {
      setCutting(false);
      setSplit(true);
      // Set the flbox state to true after the cake is split
      setFlbox(true);
    }, 2500);
  };

  return (
    <div className={`surprise-page ${lightsOn ? "pink-bg" : "black-bg"}`}>
      {!lightsOn && (
        <button className="btn" onClick={() => setLightsOn(true)}>
          Lights on
        </button>
      )}

      {lightsOn && !musicOn && (
        <button
          className="btn"
          onClick={() => {
            setMusicOn(true);
            const audio = new Audio(hBds);
            audio.play();
          }}
        >
          Play Music
        </button>
      )}

      {musicOn && !decor && (
        <button className="btn" onClick={() => setDecor(true)}>
          Decorate
        </button>
      )}

      {decor && (
        <>
          <img src={decorImage} alt="Decoration" className="decoration-img" />
          <div
            className="bouncy"
            style={{ left: "0%", rotate: "x 180deg" }}
          ></div>
          <div
            className="bouncy"
            style={{ right: "0%", rotate: " 180deg" }}
          ></div>
          {!balloons && (
            <button className="btn" onClick={() => setBalloons(true)}>
              Fly the balloons
            </button>
          )}
          <img src={hKitty} className="hkitty" style={{ left: "10%" }} />
          <img src={hKitty} className="hkitty" style={{ right: "10%" }} />
        </>
      )}

      {balloons && !cake && (
        <button className="btn" onClick={() => setCake(true)}>
          Show the cake
        </button>
      )}

      {decor && <Confetti recycle={false} numberOfPieces={800} />}

      {balloons && (
        <div className="balloons">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="balloon"></div>
          ))}
        </div>
      )}

      {cake && !flbox && (
        <div className={`split-image-container ${cutting ? "cut" : ""}`}>
          <span className="split-image"></span>
          <span className="split-image"></span>

          {!cutting && (
            <button className="btn cut-btn" onClick={handleCutCake}>
              Cut the Cake 🎂
            </button>
          )}

          <div className="knife"></div>
        </div>
      )}

      {flbox && (
        <div
          className="flbox"
          style={{
            width: "80vw",
            height: "500px",
            color: "#000",
            borderRadius: "50px",
            zIndex: "999",
            boxShadow: "5px 5px 20px #585858ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <p>Hope you liked it. Now, let's see the Next Surprise!!!</p>
          <div
            style={{
              backgroundImage: `url(${chipchip})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "147.3px",
              // position: "absolute",
              // top: "20px",
              // right: "20px",
            }}
          ></div>
          <button
            className="btn"
            style={{marginTop: '5px', width: '150px'}}
            onClick={() => {
              window.location.href = "/happybday-main/";
            }}
          >
            Next &gt;&gt;&gt;
          </button>

          <div
            style={{
              backgroundImage: `url(${lheart})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "294px",
              height: "126px",
              position: "absolute",
              bottom: "10px",
              right: "10px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
