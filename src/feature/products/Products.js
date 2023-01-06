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
import { useTranslation } from "react-i18next";

export const Products = () => {

  const { t, i18n } = useTranslation();

  const shells = [
    {
      title: t("Products.CardNames.Chandler"),
      img: Chandler,
      background: "#82796E",
    },
    {
      title: t("Products.CardNames.Lara"),
      img: Lara,
      background: "#105E25",
    },
    {
      title: t("Products.CardNames.Howard"),
      img: Howard,
      background: "#FE6F45",
    },
    {
      title: t("Products.CardNames.Fernor"),
      img: Fernor,
      background: "#D1B89F",
    },
  ];

  return (
    <Mainlayout>
      <div id="products">
        <img src={productCover} alt="productCover" />
        <div className="product container">
          <div>
            <HomeTitle size="32px" title={t("Products.Tittle")} />
            <p>
              {t("Products.Paragraph-1")}
              <br />
              <br />
              {t("Products.Paragraph-2")}
            </p>
          </div>
          <img src={box} alt="box" />
        </div>
        <div className="section2 container">
          <h2 className="shell-title">{t("Products.SubTittle")}</h2>
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
            <h2>{t("Products.Category.Tittle")}</h2>
            <div className="category">
              <div className="box">
                <h2>{t("Products.Category.Types.Extra")}</h2>
                <img src={extralight} alt="extralight" />
              </div>
              <div className="box">
                <h2>{t("Products.Category.Types.Light")}</h2>
                <img src={light} alt="light" />
              </div>
              <div className="box">
                <h2>{t("Products.Category.Types.LightAmber")}</h2>
                <img src={lightamber} alt="lightamber" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
