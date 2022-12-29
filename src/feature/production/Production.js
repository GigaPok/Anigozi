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
import { useTranslation } from "react-i18next";

export const Production = () => {
  const { t, i18n } = useTranslation();

  return (
    <Mainlayout>
      <div id="production">
        <div className="cover">
          <img className="cover-img" src={productionCover} alt="productionCover" />
          <img className="cover-img" src={productionCover2} alt="productionCover" />
          <div className="prod">
            <HomeTitle size="32px" title={t("Production.Tittle")} />
            <p>
              {t("Production.Paragraph-1")}
              <br />
              <br />
              {t("Production.Paragraph-2")}

              <br />
              <br />
              {t("Production.Paragraph-3")}
            </p>
          </div>
          <div className="decor">
            <img src={decor} alt="decor" />
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
