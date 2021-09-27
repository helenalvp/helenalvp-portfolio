const ProjectCard = (projectObj) => (
  <div
    class={`work-card card col-5 p-0 m-2 overflow-auto ${projectObj.type}`}
    key={`${projectObj.type}-${projectObj.name}`}
    style={{ width: "18rem" }}
  >
    <img src={projectObj.cardImage} alt={projectObj.name} />
    <div class="card-img-overlay card-overlay overflow-auto text-white">
      <h5 class="card-title">{projectObj.name}</h5>
      <p class="card-text ">{projectObj.description}</p>
      <a
        href={projectObj.link}
        class="btn btn-dark m-2"
        rel="noreferrer"
        target="_blank"
      >
        Visit Website
      </a>
      <button
        class="btn btn-dark m-2"
        rel="noreferrer"
        target="_blank"
        // onClick={this.updateState()}
      >
        More Info
      </button>
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
