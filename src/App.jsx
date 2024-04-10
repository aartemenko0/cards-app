import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Table from "./components/Table/Table";
import Slider from "./components/pages/Slider/Slider.jsx";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/game" element={<Slider />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
