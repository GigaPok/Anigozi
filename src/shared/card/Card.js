import React from "react";
import { HomeP } from "../title/HomeP";
import { HomeTitle } from "../title/HomeTitle";

const Card = () => {
  return (
    <div>
      <HomeTitle size="32px" title="Support" color="#686159" />
      <img src={support} />
      <HomeP
        p="We bring support to the grower before, 
              during and after the harvest."
      />
    </div>
  );
};

export default Card;
