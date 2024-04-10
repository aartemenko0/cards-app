import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Table from "./components/Table/Table";
import Slider from "./components/pages/Slider/Slider.jsx";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Slider />
    //   <Table />
    // </div>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Table />} /> {/* Главная страница */}
        <Route path="/game" element={<Slider />} />{" "}
        {/* Страница со слайдером */}
      </Routes>
    </div>
  );
}

export default App;
