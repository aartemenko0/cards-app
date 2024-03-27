import React, { useState } from "react";
import MainPage from "../MainPage/MainPage";
import SliderButtons from "../SliderButtons/SliderButtons";
import data from "../../data/data";
import styles from "./Slider.module.css";

const Slider = () => {
  const words = data.map((item) => item.english);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <SliderButtons onPrev={handlePrev} onNext={handleNext} type="prev" />
        <MainPage word={data[currentIndex]} />
        <SliderButtons onPrev={handlePrev} onNext={handleNext} type="next" />
      </div>
    </div>
  );
};

export default Slider;
