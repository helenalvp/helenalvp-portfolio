import React from "react";
import "./about.css";
import JsImg from "../../assets/img/logos/icons8-javascript-144.png";
import ReactImg from "../../assets/img/logos/icons8-react-120.png";
import HtmlImg from "../../assets/img/logos/icons8-html-5-144.png";
import CssImg from "../../assets/img/logos/icons8-css3-144.png";
import MicrosoftSqlImg from "../../assets/img/logos/icons8-microsoft-sql-server-144.png";
import PostgreImg from "../../assets/img/logos/icons8-postgresql-144.png";
import MyImage from "../../assets/img/self-logo/self-bg.jpg";
import Resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <div className="container">
      <header className="text-center"></header>
      <div className="row">
        <div
          data-animate="fadeInUp"
          className="col-lg-6 animated fadeInUp mt-3 about-text"
        >
          <h2 data-animate="fadeInDown" className="title animated fadeInDown">
            About me
          </h2>
          <p>
            I have worked in Full Stack projects with React in the front end and
            .NET in the back end. I have also worked with other js frameworks
            and libraries such as Express.js and Socket.io.
          </p>
          I found a love for programming due to its versatility and endless pool
          of knowledge you can tap into.
          <p>
            I have worked in multiple group coding projects and am most
            comfortable in agile environments.
          </p>
          <p>
            Right now, I am focusing on creating a scalable bug tracker that
            will keep track of my progress and bugs for my future projects. I
            have recently helped integrate the facebook graph api to perzonalize
            a users profile. In the future, I plan on expanding my horizons and
            focus more towards automation and scalability, but I am always open
            to anything.
          </p>{" "}
          <p>
            <a
              href={Resume}
              rel="noreferrer"
              download="helena_vaquera_resume"
              target="_blank"
              className="btn btn-outline-dark resume-btn"
            >
              <i className="fa fa-download"></i> Download Resume
            </a>
          </p>
          <hr />
          <p>
            <i>"Be set on the goal, but flexible on the approach"</i> <br />
            <small>-William Donohue</small>
          </p>
        </div>
        <div
          data-animate="fadeInUp"
          className="avatar col-sm-6 mx-auto pl-5 animated fadeInUp mt-5"
        >
          <img
            src={MyImage}
            alt="This is me - IT worker"
            className="image rounded-circle img-fluid"
          />
        </div>
      </div>
      {/* skills */}
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title animated fadeInDown">
            Technologies
          </h2>
        </header>

        {/* <!-- Skills--> */}
        <div id="skills" className="skills-section bg-gray mt-5">
          <div className="bg-transparent">
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={JsImg}
                      title="Javascript"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="Javascript"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={ReactImg}
                      title="React"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="React"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={HtmlImg}
                      title="HTML"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="HTML"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={CssImg}
                      title="CSS"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="CSS"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={MicrosoftSqlImg}
                      title="Microsoft SQL"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="Microsoft SQL"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="skill">
                    <img
                      src={PostgreImg}
                      title="PostgreSQL"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      alt=""
                      className="img-fluid d-block mx-auto logo"
                      data-original-title="PostgreSQL"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
