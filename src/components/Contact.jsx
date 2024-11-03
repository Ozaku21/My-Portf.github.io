import { Link } from "react-router-dom";
import { useState } from "react";
import Me from "../../src/me.png";
import "./Contact.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setIsLoading(false);
  }

  return (
    <>
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
      <div className="contacts">
        <div className="email">
          <span>Dachi.kazo@gmail.com</span>
        </div>
        <div className="phone">
          <span>(+995) 551 32-19-80</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
