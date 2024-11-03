import { Link } from "react-router-dom";
import { useState } from "react";
import Me from "../../src/me.png";
import "./content.css";

function Experience() {
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
        <ul className="experience-div">
          <li>
            <h1>Freelance Experience</h1>
            <span>
              Made websites and web apps for customers through online orders or
              helping a friend/relative
            </span>
          </li>
          <li>
            <h1>Group Projects</h1>
            <span>
              Worked in group projects developing websites through university
              projects and online group projects
            </span>
          </li>
          <li>
            <h1>Projects</h1>
            <span>
              Made multiple interactive websites such as To-Do List, Quiz App
              and API based apps such as weather App.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
