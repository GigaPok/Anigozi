import React from "react";
import { HomeP } from "../title/HomeP";
import { HomeTitle } from "../title/HomeTitle";

const Card = ({ title, p, img }) => {
  return (
    <div className="card">
      <HomeTitle size="32px" title={title} color="#686159" />
      <img src={img} />
      <HomeP p={p} />
    </div>
  );
};

export default Card;
