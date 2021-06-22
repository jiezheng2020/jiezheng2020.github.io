import "./Projects.css";
import calorie from "./calorie.PNG";
import harmony from "./harmony.PNG";
import wanderlust from "./wanderlust.PNG";

export default function Projects() {
  return (
    <div id="projects">
      <div className="d-flex flex-column align-items-center">
        <h2 style={{ fontSize: "35px", marginBottom: "30px" }}>Projects</h2>
        <div className="d-flex projects-row">
          <div className="d-flex flex-column align-items-center">
            <h3 style={{ marginTop: "20px" }}>Calorie</h3>
            <h5 style={{ marginBottom: "20px" }}>
              Your personal calorie counter
            </h5>
            <div className="project-container">
              <img className="proj-image" src={calorie} />
              <div className="d-flex flex-row proj-links">
                <a href="https://github.com/jiezheng2020/Calorie">
                  Github Repo
                </a>
                <a href="https://calorie-aa.herokuapp.com/welcome">Live Link</a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h3 style={{ marginTop: "20px" }}>Harmony</h3>
            <h5 style={{ marginBottom: "20px" }}>Chat with friends live</h5>
            <div className="project-container">
              <img className="proj-image" src={harmony} />
              <div className="d-flex flex-row proj-links">
                <a href="https://github.com/danielshoun/harmony/">
                  Github Repo
                </a>
                <a href="https://harmony-app-aa.herokuapp.com/">Live Link</a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h3 style={{ marginTop: "20px" }}>Wanderlust</h3>
            <h5 style={{ marginBottom: "20px" }}>Traveling made easy</h5>
            <div className="project-container">
              <img className="proj-image" src={wanderlust} />
              <div className="d-flex flex-row proj-links">
                <a href="https://github.com/jiezheng2020/Wanderlust/wiki">
                  Github Repo
                </a>
                <a href="https://wanderlst.herokuapp.com/">Live Link</a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h3 style={{ marginTop: "20px" }}>GoodGamesGG</h3>
            <h5 style={{ marginBottom: "20px" }}>Your go to game catalog</h5>
            <div className="project-container">
              <img className="proj-image" src="" />
              <div className="d-flex flex-row proj-links">
                <a>Github Repo</a>
                <a>Live Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
