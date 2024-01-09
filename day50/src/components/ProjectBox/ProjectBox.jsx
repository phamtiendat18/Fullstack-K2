import "./ProjectBox.css";
const ProjectBox = ({ title, content, demoLink, githubLink }) => {
  return (
    <div className="project-item">
      <div className="item-wrapper">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="actions">
          <a href={demoLink} target="_blank">
            Demo
          </a>
          <a href={githubLink} target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
