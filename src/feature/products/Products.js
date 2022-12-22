import React from "react";
import "./Products.scss";
import { Mainlayout } from "../../core";
import { HomeTitle } from "../../shared";
import productCover from "../../assets/productCover.png";
import box from "../../assets/box.png";
import Chandler from "../../assets/svg/chandler.svg";
import Lara from "../../assets/svg/lara.svg";
import Howard from "../../assets/svg/howard.svg";
import Fernor from "../../assets/svg/fernor.svg";
import extralight from "../../assets/svg/extralight.svg";
import light from "../../assets/svg/light.svg";
import lightamber from "../../assets/svg/lightamber.svg";

const shells = [
  {
    title: "Chandler",
    img: Chandler,
    background: "#82796E",
  },
  {
    title: "Lara",
    img: Lara,
    background: "#105E25",
  },
  {
    title: "Howard",
    img: Howard,
    background: "#FE6F45",
  },
  {
    title: "Fernor",
    img: Fernor,
    background: "#D1B89F",
  },
];

export const Products = () => {
  return (
    <Mainlayout>
      <div id="products">
        <img src={productCover} alt="productCover" />
        <div className="product container">
          <div>
            <HomeTitle size="32px" title="Products" />
            <p>
              We can supply all range of products from In-shell to kernels.
              Company produces, processes and packs in shell walnuts of 4
              varieties: Chandler, Lara, Howard and Fernor. Available sizes from
              30/32 to 36/38 and 10-25 kg bulk bags. Kernels are available in 3
              colors: Extra Light, Light and Light Amber and 3 grades: 80%
              Halves, 60% halves and 40% halves.
              <br />
              <br />
              Packaging high quality box or PP bags.
            </p>
          </div>
          <img src={box} alt="box" />
        </div>
        <div className="section2 container">
          <h2 className="shell-title">In-shell: 30/32; 32/34; 34/36; 36/38</h2>
          <div className="shell">
            {shells.map((el, key) => (
              <div
                key={key}
                style={{ backgroundColor: el.background }}
                className="box"
              >
                <h2>{el.title}</h2>
                <img src={el.img} alt="shell" />
              </div>
            ))}
          </div>
          <div className="quality">
            <h2>Walnut Kernles (Machine-Cracked/Hand-Cracked)</h2>
            <div className="category">
              <div className="box">
                <h2>Extra Light</h2>
                <img src={extralight} alt="extralight" />
              </div>
              <div className="box">
                <h2>Light</h2>
                <img src={light} alt="light" />
              </div>
              <div className="box">
                <h2>Light Amber</h2>
                <img src={lightamber} alt="lightamber" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
