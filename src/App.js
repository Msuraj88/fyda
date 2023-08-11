import React from "react";
import { Routes, Route } from "react-router-dom";
 import Trade from "../src/Pages/Trade/Trade";
import Portfolio from "./Pages/Portfolio/Portfolio";




const App = () => {
  return (
    <div style={{ background: "#f6f7fb" }}>
      <Routes>
        <Route path="/" element={<Trade />}></Route>
       < Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
};

export default App;