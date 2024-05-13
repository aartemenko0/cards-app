import React from "react";

const SliderButtons = ({ onNext, onPrev, type }) => {
  return (
    <div>
      {type === "prev" && <button onClick={onPrev}>{"<"}</button>}
      {type === "next" && <button onClick={onNext}>{">"}</button>}
    </div>
  );
};

export default SliderButtons;
