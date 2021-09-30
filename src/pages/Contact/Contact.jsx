import React from "react";
import "./contact.css";
// import { bounce } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title">Contact Me</h1>
      <div className="card bg-transparent shadow-lg p-3 mb-5 mt-4 bg-body rounded ">
        <form
          className=" container bg-transparent mb-5 bg-body rounded"
          method="POST"
          data-netlify-recaptcha="true"
          name="contact"
          id="contact-form"
          netlify
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name *"
                name="first-name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name *"
                name="last-name"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email *"
              name="email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message for me *"
              name="message"
            ></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" className="btn btn-dark">
            Send Message
          </button>
        </form>
      </div>
      <div class="row text-center p-2 mb-5">
        <a
          href="https://github.com/helenalvp"
          class="icon github col-3"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="icon github col-md-4" icon={faGithubSquare} />
        </a>
        <a
          href="https://twitter.com/helenalvp"
          target="_blank"
          rel="noreferrer"
          class="icon twitter col-3"
        >
          <FontAwesomeIcon
            class="icon twitter col-md-4"
            icon={faTwitterSquare}
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/helenalvp"
          target="_blank"
          rel="noreferrer"
          class="icon linkedin col-3"
        >
          <FontAwesomeIcon class="icon linkedin col-md-4" icon={faLinkedin} />{" "}
        </a>
        <a
          href="https://dev.to/helenalvp"
          target="_blank"
          class="icon dev col-3"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="icon dev col-md-4" icon={faDev} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
