import React, { useState } from "react";
import MainPage from "../MainPage/MainPage";
import SliderButtons from "../../components/SliderButtons/SliderButtons";
import data from "../../data/data";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentWord = data[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <SliderButtons onPrev={handlePrev} onNext={handleNext} type="prev" />
        <MainPage key={currentWord.english} word={currentWord} />
        <SliderButtons onPrev={handlePrev} onNext={handleNext} type="next" />
      </div>
    </div>
  );
};

export default Slider;
