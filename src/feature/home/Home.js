import React, { useEffect } from "react";
import "./Home.scss";
import { Mainlayout } from "../../core";
import graphic from "../../assets/graphic.png";
import anigozi1 from "../../assets/anigozi1.png";
import anigozi2 from "../../assets/anigozi2.png";
import production1 from "../../assets/production.png";
import production2 from "../../assets/production2.png";
import sertificate from "../../assets/sertificate.png";
import sertificate2 from "../../assets/sertificate2.png";
import sertLogo from "../../assets/svg/certifLogo.svg";
import Seemore from "../../shared/button/Seemore";
import { HomeP, HomeTitle } from "../../shared";
import support from "../../assets/svg/support.svg";
import standard from "../../assets/svg/stand.svg";
import rates from "../../assets/svg/rates.svg";
import decorTop from "../../assets/svg/decor.svg";
import decorBottom from "../../assets/svg/decorB.svg";
import { products, about, production } from "../../router";
import { useTranslation } from "react-i18next";
import AOS from "aos";

export const Home = () => {
  const { t, i18n } = useTranslation();

  const Cards = [
    {
      title: t("home.Section-5.Support"),
      img: support,
      p: t("home.Section-5.Support-P"),
    },
    {
      title: t("home.Section-5.Rates"),
      img: rates,
      p: t("home.Section-5.Rates-P"),
    },
    {
      title: t("home.Section-5.Standards"),
      img: standard,
      p: t("home.Section-5.Standards-P"),
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Mainlayout>
      <div id="home">
        <div className="section-1 container">
          <div className="graphic">
            <img src={graphic} alt="graphic" />
          </div>
          <h2>{t("home.Section-1.Tittle")}</h2>
          <HomeP p={t("home.Section-1.Paragraph")} />
          <div className="top-btn btn">
            <Seemore
              link={about}
              color="#FE6F45"
              text={t("Button.Text")}
              textColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="section-2">
          <HomeTitle title={t("home.Section-2.Tittle")} />
          <HomeP p={t("home.Section-2.Paragraph")} />
          <div className="btn">
            <Seemore
              link={products}
              color="transparent"
              text={t("Button.Text")}
              textColor="#FE6F45"
            />
          </div>

          <div className="img-wrapper">
            <img src={anigozi1} alt="kakali" data-aos="fade-right" />
            <img src={anigozi2} alt="kakali garcheuli" data-aos="fade-left" />
          </div>
        </div>
        <div className="section-3">
          <HomeTitle title={t("home.Section-3.Tittle")} />
          <HomeP p={t("home.Section-3.Paragraph")} />
          <div className="btn">
            <Seemore
              link={production}
              color="transparent"
              text={t("Button.Text")}
              textColor="#FE6F45"
            />
          </div>
          <div className="img-wrapper">
            <img src={production1} alt="production" data-aos="fade-right" />
            <img src={production2} alt="production " data-aos="fade-left" />
          </div>
        </div>
        <div className="section-4">
          <HomeTitle title={t("home.Section-4.Tittle")} />
          <HomeP p={t("home.Section-3.Paragraph")} />
          <img className="sertLogo" src={sertLogo} alt="sertlogo" />
          <div className="img-wrapper">
            <img src={sertificate} alt="sertificate" data-aos="fade-right" />
            <img src={sertificate2} alt="sertificate" data-aos="fade-left" />
          </div>
        </div>
        <div className="section-5">
          <div className="decorTop">
            {new Array(4).fill().map((el, key) => (
              <img src={decorTop} alt="decor" key={key} />
            ))}
          </div>
          <div className="cards container">
            {Cards.map((el, key) => (
              <div className="card" key={key}>
                <h2 className="cardTittle">{el.title}</h2>
                <img src={el.img} alt="decor" />
                <HomeP p={el.p} />
              </div>
            ))}
          </div>
          <div className="decorB">
            {new Array(4).fill().map((el, key) => (
              <img src={decorBottom} alt="decor" key={key} />
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
