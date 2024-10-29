import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Profile";
import Homepage from "./components/Homepage";
import PageNotFound from "./components/PageNotFound";
import Bubbles from "./components/Bubbles";

function App() {
  const [activeBubble, setActiveBubble] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveBubble("");
  }, [location]);

  return (
    <>
      <Bubbles activeBubble={activeBubble} />
      <Routes>
        <Route
          path="/"
          element={<Homepage setActiveBubble={setActiveBubble} />}
        />
        <Route
          path="profile"
          element={<Portfolio setActiveBubble={setActiveBubble} />}
        />
        <Route
          path="experience"
          element={<Experience setActiveBubble={setActiveBubble} />}
        />
        <Route
          path="skills"
          element={<Skills setActiveBubble={setActiveBubble} />}
        />
        <Route
          path="contact"
          element={<Contact setActiveBubble={setActiveBubble} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
