import React from "react";
import ProjectList from "./ProjectList";
// import ProjectCard from "./ProjectCard";
import "./Project.css";
// import MyCarousel from "../../components/Carousel";

import cartCheckerTitleCard from "../../assets/img/project-images/cart-checker/title.png";
import cartChecker1 from "../../assets/img/project-images/cart-checker/screenshot-1.PNG";
import cartChecker2 from "../../assets/img/project-images/cart-checker/screenshot-2.PNG";
import cartChecker3 from "../../assets/img/project-images/cart-checker/screenshot-3.PNG";

class Projects extends React.Component {
  state = {
    expandedInfo: {
      name: "Cart Checker",
      cardImage: cartCheckerTitleCard,
      img: [cartChecker1, cartChecker2, cartChecker3],
      type: "Project",
      description:
        "This is designed to be a companion for your shopping trips. Just have it out while you're shopping, adding every item and its price to your cart. While you shop, you can figure out exactly how much you have in your cart and how much you'll be paying in taxes before you hit the register!",
      shortDescription: "A Grocery Shopping List App",
      link: "https://helenalvp-cart-checker.netlify.app/",
    },
  };
  MappedProjects = () => {
    return ProjectList.map(this.ProjectCard);
  };

  ProjectCard = (projectObj) => (
    <div
      className={`work-card card col-5 p-0 m-2 overflow-auto ${projectObj.type}`}
      key={`${projectObj.type}-${projectObj.name}`}
      style={{ width: "18rem" }}
    >
      <img src={projectObj.cardImage} alt={projectObj.name} />
      <div className="card-img-overlay card-overlay overflow-auto text-white ">
        {/* <h5 className="card-title">{projectObj.name}</h5> */}
        {/* <p className="card-text ">{projectObj.description}</p> */}
        <a
          href={projectObj.link}
          className="btn btn-dark m-2"
          rel="noreferrer"
          target="_blank"
        >
          Visit Website
        </a>
        <button
          className="btn btn-dark m-2"
          rel="noreferrer"
          target="_blank"
          onClick={() => {
            this.updateState(projectObj);
          }}
        >
          More Info
        </button>
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

  expandedCard = (infoObj) => {
    return (
      <div className="container card bg-transparent shadow-lg p-3 mb-5 bg-body rounded">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-dark card-img-top"
          data-bs-ride="carousel "
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={infoObj.img[0]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={infoObj.img[1]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={infoObj.img[2]} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
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
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{infoObj.name}</h5>
          <p className="card-text">{infoObj.description}</p>
          <p className="card-text">
            {infoObj.technologies ? infoObj.technologies : null}
          </p>
          <a
            href={infoObj.link}
            className="btn btn-dark m-2"
            rel="noreferrer"
            target="_blank"
          >
            Visit Website
          </a>
          <button
            className="btn btn-danger m-2"
            rel="noreferrer"
            target="_blank"
            onClick={this.resetState}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container project-container mt-5">
        <h1 className="title">My Work</h1>
        <div className="row">
          <div className="col-lg-5 col-12 ">
            <div className="row d-flex justify-content-center mt-4">
              {this.MappedProjects()}
            </div>
          </div>
          <div className="col-lg-7 col-12 order-first order-lg-last">
            {this.state.expandedInfo
              ? this.expandedCard(this.state.expandedInfo)
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
