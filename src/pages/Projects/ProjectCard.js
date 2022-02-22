const ProjectCard = (projectObj) => (
  <div className="card mb-3" style={{ "max-width": "540px" }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={projectObj.cardImage}
          alt={projectObj.name}
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;

// var fizzBuzz = {
//   name: "Fizz Buzz",
//   cardImage: "",
//   img: [],
//   type: "Code Challenge",
//   description:
//     "A javascript coding project exercise using loops. A program that prints the numbers from 1 to 100 and for multiples of `3` display `Fizz` instead of the number and for the mutliples of `5` display `Buzz`. If a multiple of both, it displays `FizzBuzz`",
//   link: "https://helenalvp-fizzbuzz.netlify.app/",
// };

// const ProjectCard = (projectObj) => (
//   <div
//     className={`work-card card col-5 p-0 m-2 overflow-auto ${projectObj.type}`}
//     key={`${projectObj.type}-${projectObj.name}`}
//     style={{ width: "18rem" }}
//   >
//     <img src={projectObj.cardImage} alt={projectObj.name} />
//     <div className="card-img-overlay card-overlay overflow-auto text-white">
//       <h5 className="card-title">{projectObj.name}</h5>
//       <p className="card-text ">{projectObj.description}</p>
//       <a
//         href={projectObj.link}
//         className="btn btn-dark m-2"
//         rel="noreferrer"
//         target="_blank"
//       >
//         Visit Website
//       </a>
//       <button
//         className="btn btn-dark m-2"
//         rel="noreferrer"
//         target="_blank"
//         // onClick={this.updateState()}
//       >
//         More Info
//       </button>
//     </div>
//   </div>
// );
