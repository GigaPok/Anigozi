import React from "react";
import "./Production.scss";
import { Mainlayout } from "../../core";
import { HomeTitle } from "../../shared";
import productionCover from "../../assets/productionCover.png";
import productionCover2 from "../../assets/productionCover2.png";
import product from "../../assets/product.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import decor from "../../assets/svg/decor3.svg";

export const Production = () => {
  return (
    <Mainlayout>
      <div id="production">
        <div className="cover">
          <img src={productionCover} alt="productionCover" />
          <img src={productionCover2} alt="productionCover" />
          <div className="prod">
            <HomeTitle size="32px" title="Production" />
            <p>
              With a capacity of nearly 1 500 tons per year, Anigozi grows and
              processes walnuts in two formats, in-shell and kernels. Factory is
              equipped with modern French origin(“AMB Rousset”) processing line
              - Washing, Drying, Sizing and Turkish origin(“US SORT AKY
              Technology”) cracking line with capacity of cracking 1 000 kg per
              hour.
              <br />
              <br />
              Anigozi is one of the largest walnut producers in Georgia with
              state-of-the-art processing facilities in the village of Martkopi,
              Gardabani municipality. Working cooperatively with local farmers,
              the company processes and packs Chandler, Lara and Howard walnuts
              from various regions of Georgia to exacting international
              specifications. In Georgia,
              <br />
              <br />
              All of Anigozi's walnuts are produced to meet the needs of
              international audiences, especially buyers in EU and Gulf
              countries. As such, the company maintains FSSC 22000
              certification, ensuring quality and food safety assurances
              throughout every stage of operations. With its head office in
              Georgia's capital city of Tbilisi, the company manages both
              domestic and international accounts in a manner that ensures
              accurate and timely deliveries.
            </p>
          </div>
          <div className="decor">
            <img src={decor} />
          </div>
        </div>
        <div className="production"></div>
        <div className="coverBottom">
          <img src={product2} alt="productionCover" />
          <img src={product3} alt="productionCover" />
          <img src={product} alt="productionCover" />
        </div>
      </div>
    </Mainlayout>
  );
};
