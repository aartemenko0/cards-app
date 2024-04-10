import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Table from "./components/Table/Table";
import Slider from "./components/pages/Slider/Slider.jsx";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/game" element={<Slider />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
