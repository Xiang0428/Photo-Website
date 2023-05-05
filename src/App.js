import React from "react";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";

import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
