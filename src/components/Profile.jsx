import { Link } from "react-router-dom";
import { useState } from "react";
import Me from "../../src/me.png";

function Portfolio() {
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
        <ul className="profile-ul">
          <li>Learning JavaScript since mid 2023</li>
          <li>Learning React since 2024 March</li>
          <li>Passionate about development</li>
          <li>Team player</li>
          <li>
            Eager to learn and take direction to become a full complete react
            dev
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
