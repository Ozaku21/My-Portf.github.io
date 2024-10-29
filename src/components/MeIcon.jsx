import React, { useState } from "react";

import Me from "../../public/me.png";
import "./MeIconStyle.css";
import "./Loading.css";

function MeIcon() {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setIsLoading(false);
  }

  return (
    <div className="My-icon-div">
      <h1>Dachi Kazaishvili</h1>
      {isLoading && <div className="loader"></div>}
      <img
        className="My-icon"
        src={Me}
        alt="Icon Of Me"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
}

export default MeIcon;
