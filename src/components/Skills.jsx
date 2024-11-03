import { Link } from "react-router-dom";
import { useState } from "react";
import Me from "../../src/me.png";

function Skills() {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setIsLoading(false);
  }

  return (
    <div className="alt-page">
      <div className="img-link">
        <Link to="/">
          <img
            className="My-icon"
            src={Me}
            alt="Icon Of Me"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </Link>
      </div>
      <div className="content">
        <div className="progress-div">
          <span>HTML</span>
          <progress value="100" max="100"></progress>
        </div>
        <div className="progress-div">
          <span>CSS / Tailwind CSS</span>
          <progress value="90" max="100"></progress>
        </div>
        <div className="progress-div">
          <span>JavaScript</span>
          <progress value="65" max="100"></progress>
        </div>
        <div className="progress-div">
          <span>React</span>
          <progress value="50" max="100"></progress>
        </div>
      </div>
    </div>
  );
}

export default Skills;
