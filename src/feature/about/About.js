import React from "react";
import "./About.scss";
import { Mainlayout } from "../../core";
import contactCover from "../../assets/contactCover.png";
import aginoziabout from "../../assets/aginoziabout.png";
import { HomeTitle } from "../../shared";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Mainlayout>
      <div id="about">
        <img src={contactCover} alt="contactCover" />
        <div className="about container">
          <HomeTitle size="32px" title={t("AboutUs.Tittle")} />
          <div className="wrapper">
            <p>
              {t("AboutUs.Paragraph-1")}
              <br />
              <br />
              {t("AboutUs.Paragraph-2")}
              <br />
              <br />
              {t("AboutUs.Paragraph-3")}
              <br />
              <br />
              {t("AboutUs.Paragraph-4")}
              <br />
              {t("AboutUs.Paragraph-5")}
              <br />
              {t("AboutUs.Paragraph-6")}
            </p>
            <img src={aginoziabout} alt="aginozAbout" />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
