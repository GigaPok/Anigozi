import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../svg/Arrow";
import "./Seemore.scss";

const Seemore = ({ text, color, textColor, link }) => {
  const arrColor = textColor;
  return (
    <Link
      to={link}
      className="see-more"
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
      <Arrow arrowColor={arrColor} />
    </Link>
  );
};

export default Seemore;
