import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Me from "../../public/me.png";
import "./MeIconStyle.css";

function Homepage({ setActiveBubble }) {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setIsLoading(false);
  }

  return (
    <div className="main-div">
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
      <div className="mother-about-me">
        <div className="about-me">
          <Link
            to="/experience"
            onMouseEnter={() => setActiveBubble("pink")}
            onMouseLeave={() => setActiveBubble("")}
          >
            Experience
          </Link>
          <Link
            to="/skills"
            onMouseEnter={() => setActiveBubble("green")}
            onMouseLeave={() => setActiveBubble("")}
          >
            Skills
          </Link>
          <Link
            to="/profile"
            onMouseEnter={() => setActiveBubble("yellow")}
            onMouseLeave={() => setActiveBubble("")}
          >
            Profile
          </Link>
          <Link
            to="/contact"
            onMouseEnter={() => setActiveBubble("purple")}
            onMouseLeave={() => setActiveBubble("")}
          >
            Contact
          </Link>
          <Link to="https://github.com/Ozaku21" target="_blank">
            Github Link
          </Link>
        </div>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  setActiveBubble: PropTypes.func.isRequired,
};

export default Homepage;
