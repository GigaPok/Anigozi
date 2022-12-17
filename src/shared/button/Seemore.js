import React from "react";
import Arrow from "../svg/Arrow";
import "./Seemore.scss";

const Seemore = ({ text, color, textColor }) => {
  const arrColor = textColor;
  return (
    <button
      className="see-more"
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
      <Arrow arrowColor={arrColor} />
    </button>
  );
};

export default Seemore;
