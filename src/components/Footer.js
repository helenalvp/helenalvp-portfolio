import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faDev } from "@fortawesome/free-brands-svg-icons";
// import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="footer row">
    <div className="col">
      <p>© 2021 Helena Vaquera. All rights reserved.</p>
    </div>

    <div className="social-links col-8 col-sm-6 ">
      <div class="text-right mr-md-5">
        <a
          href="https://github.com/helenalvp"
          class="icon github"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            class="icon github mx-2 px-2"
            icon={faGithubSquare}
            size="xs"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/helenalvp"
          target="_blank"
          rel="noreferrer"
          class="icon linkedin "
        >
          <FontAwesomeIcon
            class="icon linkedin mx-2 px-2"
            icon={faLinkedin}
            size="xs"
          />
        </a>
        <div className="not-being-used">
          {/* <a
          href="https://twitter.com/helenalvp"
          target="_blank"
          rel="noreferrer"
          class="icon twitter col-3"
        >
          <FontAwesomeIcon
            class="icon twitter col-md-10 col-lg-6"
            icon={faTwitterSquare}
          />{" "}
        </a> */}

          {/* <a
          href="https://dev.to/helenalvp"
          target="_blank"
          class="icon dev col-3"
          rel="noreferrer"
        >
          <FontAwesomeIcon class="icon dev col-md-10 col-lg-6" icon={faDev} />
        </a> */}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
