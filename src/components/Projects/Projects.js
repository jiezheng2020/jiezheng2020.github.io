import "./Projects.css";
import calorie from "./calorie.PNG";
import harmony from "./harmony.PNG";
import wanderlust from "./wanderlust.PNG";

export default function Projects() {
  return (
    <div id="projects">
      <div className="d-flex flex-column align-items-center">
        <h2 style={{ fontSize: "30px" }}>Projects</h2>
        <div className="d-flex projects-row">
          <div className="project-container">
            <img className="proj-image" src={calorie} />
            <div className="d-flex flex-row proj-links">
              <a>Github Repo</a>
              <a>Live Link</a>
            </div>
          </div>
          <div className="project-container d-flex flex-column">
            <img className="proj-image" src={harmony} />
            <div className="d-flex flex-row proj-links">
              <a>Github Repo</a>
              <a>Live Link</a>
            </div>
          </div>
          <div className="project-container">
            <img className="proj-image" src={wanderlust} />
            <div className="d-flex flex-row proj-links">
              <a>Github Repo</a>
              <a>Live Link</a>
            </div>
          </div>
          <div className="project-container">
            <div className="proj-image" />
            <div className="d-flex flex-row proj-links">
              <a>Github Repo</a>
              <a>Live Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
