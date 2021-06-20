import "./Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <div className="d-flex flex-column align-items-center">
        <h2 style={{ fontSize: "30px" }}>Projects</h2>
        <div className="d-flex projects-row">
          <div className="project-container">Project 1</div>
          <div className="project-container">Project 1</div>
          <div className="project-container">Project 1</div>
          <div className="project-container">Project 1</div>
        </div>
      </div>
    </div>
  );
}
