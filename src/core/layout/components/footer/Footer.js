import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  home,
  products,
  contact,
  videos,
  about,
  production,
} from "../../../../router";
import logo from "../../../../assets/svg/logo.svg";
import ebrd from "../../../../assets/ebrd.png";
import eugeorgia from "../../../../assets/svg/eu.svg";
import og from "../../../../assets/svg/og.svg";
import USAID from "../../../../assets/svg/USAID.svg";
import phoneIcon from "../../../../assets/svg/phone.svg";
import mapIcon from "../../../../assets/svg/map.svg";
import mailIcon from "../../../../assets/svg/mail.svg";
import fbIcon from "../../../../assets/svg/fbIcon.svg";
import linkIcon from "../../../../assets/svg/linkedin.svg";
import arrow from "../../../../assets/svg/arrow.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const scrollUp = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div id="footer">
      <div className="footer-header container">
        <Link to="/">
          <img src={logo} alt="avigozi logo" />
        </Link>
        <button className="up" onClick={() => scrollUp()}>
          <img src={arrow} alt="upp icon" />
        </button>
        <div className="nav-links">
          <ul>
            <li>
              <Link to={home} onClick={() => scrollUp()}>
                {t("Footer.Nav.Home")}
              </Link>
            </li>
            <li>
              <Link to={about} onClick={() => scrollUp()}>
                {t("Footer.Nav.About")}
              </Link>
            </li>
            <li>
              <Link to={products} onClick={() => scrollUp()}>
                {t("Footer.Nav.Products")}
              </Link>
            </li>
            <li>
              <Link to={production} onClick={() => scrollUp()}>
                {t("Footer.Nav.Production")}
              </Link>
            </li>
            <li>
              <Link to={videos} onClick={() => scrollUp()}>
                {t("Footer.Nav.Videos")}
              </Link>
            </li>
            <li>
              <Link to={contact} onClick={() => scrollUp()}>
                {t("Footer.Nav.Contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="support-wrapper container">
        <span className="web"> {t("Footer.Tittle")}</span>
        <img className="web" src={eugeorgia} alt="eugeorgia logo" />
        <img className="web" src={ebrd} alt="ebrd logo" />
        <img className="web" src={og} alt="og logo" />
        <img className="web" src={USAID} alt="USAID logo" />

        <div className="mobile">
          <span> {t("Footer.Tittle")}</span>
          <div>
            <img src={eugeorgia} alt="eugeorgia logo" />
            <img src={ebrd} alt="ebrd logo" />
            <img src={og} alt="og logo" />
            <img src={USAID} alt="USAID logo" />
          </div>
        </div>
      </div>
      <div className="container footer-contact">
        <div>
          <ul>
            <li>
              <img src={phoneIcon} alt="phone icon" />
              <div className="phone-numbers">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "tel:0322888088";
                    e.preventDefault();
                  }}
                >
                  (+995) 322 88 80 88
                </Link>
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "tel:+995592700010";
                    e.preventDefault();
                  }}
                >
                  (+995) 592 700 010
                </Link>
              </div>
            </li>
            <li>
              <img src={mailIcon} alt="mail icon" />
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:ana@anigozi.com";
                  e.preventDefault();
                }}
              >
                ana@anigozi.com
              </Link>
            </li>
            <li>
              <img src={mapIcon} alt="map icon" />
              <a
                href="https://goo.gl/maps/4VgHf8qHsRdN4MTA9"
                target="_blank"
                rel="noreferrer"
              >
                {t("Footer.Location")}
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/anigozi22"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fbIcon} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anna-kevkhishvili-236604102"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkdedin" src={linkIcon} alt="linkedin icon" />
              </a>
            </li>
          </ul>
          <span>{t("Footer.Rights")} </span>
        </div>
      </div>
    </div>
  );
};
