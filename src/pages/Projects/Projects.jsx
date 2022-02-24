import React from "react";
import { ProjectList } from "./ProjectList"; //Featured
// import ProjectCard from "./ProjectCard";
import "./Project.css";
// import MyCarousel from "../../components/Carousel";

// import cartCheckerTitleCard from "../../assets/img/project-images/cart-checker/title.png";
// import cartChecker1 from "../../assets/img/project-images/cart-checker/screenshot-1.PNG";
// import cartChecker2 from "../../assets/img/project-images/cart-checker/screenshot-2.PNG";
// import cartChecker3 from "../../assets/img/project-images/cart-checker/screenshot-3.PNG";

class Projects extends React.Component {
  state = {
    // expandedInfo: Featured,
  };
  MappedProjects = () => {
    return ProjectList.map((project, index) =>
      this.ProjectCard(project, index)
    );
  };

  ProjectCard = (projectObj, index) => (
    <div class="accordion-item work-card p-0 m-0">
      <h2 class="accordion-header work-card" id={`flush-heading${index}`}>
        <button
          class="accordion-button collapsed work-card pt-4 pb-0 border-top border-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${index}`}
        >
          <div className="p-0 m-0" style={{ "max-width": "540px" }}>
            <div className="row g-0 p-0 m-0">
              <div className="col-12 col-md-5">
                <img
                  src={projectObj.cardImage}
                  alt={projectObj.name}
                  className="img-fluid project-image p-0 m-0"
                />
              </div>
              <div className="col">
                <div className="card-body p-0 m-0">
                  <h4 className="card-title">{projectObj.name}</h4>
                  <p className="fs-5">
                    {projectObj.shortDescription}
                    <br />
                    <span className="card-text technologies fs-6">
                      {projectObj.technologies}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${index}`}
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <p className="card-text">
            <div
              id={`carouselExampleControls${index}`}
              className="carousel slide  carousel-dark card-img-top"
              data-bs-ride="carousel "
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={projectObj.img[0]}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={projectObj.img[1]}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={projectObj.img[2]}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleControls${index}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleControls${index}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </p>
          <p className="card-text ">{projectObj.description}</p>

          <p className="card-text">
            <a
              href={projectObj.link}
              className="btn btn-sm btn-dark m-2"
              rel="noreferrer"
              target="_blank"
            >
              Visit Website
            </a>
            <a
              href={projectObj.githubLink}
              className="btn btn-sm btn-dark m-2"
              rel="noreferrer"
              target="_blank"
            >
              See Code
            </a>
            <a
              href={projectObj.demoLink}
              className="btn btn-sm btn-dark m-2"
              rel="noreferrer"
              target="_blank"
            >
              View Demo
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  updateState = (objInfo) => {
    console.log(objInfo);
    var expandedInfo = objInfo;
    this.setState({ expandedInfo });
  };
  resetState = (e) => {
    e.preventDefault();
    this.setState({ expandedInfo: null });
  };

  // expandedCard = (infoObj) => {
  //   return (
  //     <div className="container card info-card shadow-lg p-3 mb-5 bg-body rounded">
  //       <div
  //         id="carouselExampleControls"
  //         className="carousel slide carousel-dark card-img-top"
  //         data-bs-ride="carousel "
  //       >
  //         <div className="carousel-inner">
  //           <div className="carousel-item active">
  //             <img src={infoObj.img[0]} className="d-block w-100" alt="..." />
  //           </div>
  //           <div className="carousel-item">
  //             <img src={infoObj.img[1]} className="d-block w-100" alt="..." />
  //           </div>
  //           <div className="carousel-item">
  //             <img src={infoObj.img[2]} className="d-block w-100" alt="..." />
  //           </div>
  //         </div>
  //         <button
  //           className="carousel-control-prev"
  //           type="button"
  //           data-bs-target="#carouselExampleControls"
  //           data-bs-slide="prev"
  //         >
  //           <span
  //             className="carousel-control-prev-icon"
  //             aria-hidden="true"
  //           ></span>
  //           <span className="visually-hidden">Previous</span>
  //         </button>
  //         <button
  //           className="carousel-control-next"
  //           type="button"
  //           data-bs-target="#carouselExampleControls"
  //           data-bs-slide="next"
  //         >
  //           <span
  //             className="carousel-control-next-icon"
  //             aria-hidden="true"
  //           ></span>
  //           <span className="visually-hidden">Next</span>
  //         </button>
  //       </div>
  //       <div className="card-body">
  //         <h5 className="card-title fs-3">{infoObj.name}</h5>
  //         <p className="card-text ">{infoObj.description}</p>
  //         <p className="card-text technologies fs-5">
  //           {infoObj.technologies
  //             ? `Technologies Used: ${infoObj.technologies}`
  //             : null}
  //         </p>
  //         <a
  //           href={infoObj.link}
  //           className="btn btn-dark m-2"
  //           rel="noreferrer"
  //           target="_blank"
  //         >
  //           Visit Website
  //         </a>
  //         <a
  //           href={infoObj.githubLink}
  //           className="btn btn-dark m-2"
  //           rel="noreferrer"
  //           target="_blank"
  //         >
  //           View Source Code
  //         </a>
  //         <button
  //           className="btn btn-danger m-2"
  //           rel="noreferrer"
  //           target="_blank"
  //           // onClick={this.resetState}
  //         >
  //           Close
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  render() {
    return (
      <div className="container project-container col col-md-6 mt-5 bg-transparent">
        <h1 className="title">My Work</h1>

        <div className="row bg-transparent">
          <div
            class="accordion accordion-flush bg-transparent border-bottom border-dark"
            id="accordionFlushExample"
          ></div>
          {/* <div className="row d-flex justify-content-center mt-4"> */}
          {this.MappedProjects()}
          {/* </div> */}
        </div>
        {/* <div className="col-lg-7 col-12 order-first order-lg-last">
            {this.state.expandedInfo
              ? this.expandedCard(this.state.expandedInfo)
              : null}
          </div> */}
      </div>
    );
  }
}

export default Projects;
