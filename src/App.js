import React, { useState, useEffect } from "react";
import "./css/bulma.min.css";
import "./css/custom.css";

import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
