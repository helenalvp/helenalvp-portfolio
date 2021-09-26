import React from "react";
import "./home.css";
import Particles from "react-particles-js";
// import { tsParticles } from "tsparticles";

const Home = () => {
  return (
    <React.Fragment>
      <div className=" container home-container ">
        <div class="typewriter">
          <h1>I am Helena Vaquera</h1>
          <h2>I am a Full Stack Developer.</h2>
        </div>
      </div>

      <Particles
        className="particles-container"
        style={{ color: "black" }}
        params={{
          particles: {
            number: {
              value: 350,
            },
            size: {
              value: 3,
            },
            line_linked: { shadow: { enable: true, color: "black" }, blur: 5 },
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
    </React.Fragment>
  );
};

export default Home;
