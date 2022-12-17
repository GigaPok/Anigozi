import React from "react";
import "./HomeTitle.scss";

export const HomeTitle = ({ title, size, color }) => {
  return <h2 style={{ fontSize: size, color: color }}>{title}</h2>;
};
