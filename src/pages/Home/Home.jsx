import React from "react";
import "./home.css";
import Particles from "react-particles-js";
// import { tsParticles } from "tsparticles";

// eslint-disable-next-line no-restricted-globals
const screenHeight = screen.height;
// eslint-disable-next-line no-restricted-globals
const screenWidth = screen.width;
const particleNumberVal =
  screenHeight > 500 ? (screenHeight > 700 ? 200 : 100) : 25;
const particleSizeVal = screenWidth > 1100 ? (screenWidth > 1350 ? 7 : 4) : 3;

const Home = () => {
  return (
    <React.Fragment>
      <div className=" container home-container">
        <div class="typewriter">
          <h1>I am Helena Vaquera</h1>
          <h2>I am a Full Stack Developer.</h2>
        </div>
      </div>

      {screenWidth >= 1000 ? (
        <Particles
          className="particles-container"
          style={{ color: "black", "margin-top": "1%" }}
          params={{
            particles: {
              number: {
                value: particleNumberVal,
              },
              size: {
                value: particleSizeVal,
              },
              line_linked: {
                shadow: { enable: true, color: "black" },
                blur: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            polygon: {
              draw: { stroke: { color: "black" } },
            },
          }}
        />
      ) : null}
    </React.Fragment>
  );
};

export default Home;
