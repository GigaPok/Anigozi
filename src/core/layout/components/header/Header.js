import React, { useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import {
  home,
  products,
  contact,
  videos,
  about,
  production,
} from "../../../../router";
import logo from "../../../../assets/svg/logo.svg";
import menuIcon from "../../../../assets/svg/menu.svg";
import menuActive from "../../../../assets/svg/activeMenu.svg";
import logoIcon from "../../../../assets/svg/decor3.svg";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [menu, setMenu] = useState(false);

  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div id="header" className="container">
        {!menu ? (
          <img
            className="menu"
            src={menuIcon}
            onClick={() => setMenu(!menu)}
            alt="icon-menu"
          />
        ) : (
          <img
            className="menu"
            src={menuActive}
            onClick={() => setMenu(!menu)}
            alt="icon-menu"
          />
        )}
        <div className="left-nav ">
          <ul>
            <li>
              <NavLink to={about}>{t("nav.About")}</NavLink>
            </li>
            <li>
              <NavLink to={products}>{t("nav.Product")}</NavLink>
            </li>
            <li>
              <NavLink to={production}>{t("nav.Production")}</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo-wrapper">
          <Link to={home}>
            <img src={logo} alt="anigozi logo " />
          </Link>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <NavLink to={videos}>{t("nav.Videos")}</NavLink>
            </li>
            <li>
              <NavLink to={contact}>{t("nav.Contact")}</NavLink>
            </li>
          </ul>
          <div
            className="lang"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge")
            }
          >
            <span>{{ en: "Geo", ge: "Eng" }[i18n.language] || "Geo"}</span>
          </div>
        </div>
        <div
          className="lang-mobile"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "ge" ? "en" : "ge")
          }
          style={{ visibility: !menu ? "visible" : "hidden" }}
        >
          <span>{{ en: "Geo", ge: "Eng" }[i18n.language] || "Geo"}</span>
        </div>
      </div>
      {menu && (
        <div
          className="burger"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <ul>
            <li>
              <NavLink onClick={() => setMenu(!menu)} to={about}>
                {t("nav.About")}
              </NavLink>
              <NavLink onClick={() => setMenu(!menu)} to={products}>
                {t("nav.Product")}
              </NavLink>
              <NavLink onClick={() => setMenu(!menu)} to={production}>
                {t("nav.Production")}
              </NavLink>
              <NavLink onClick={() => setMenu(!menu)} to={videos}>
                {t("nav.Videos")}
              </NavLink>
              <NavLink onClick={() => setMenu(!menu)} to={contact}>
                {t("nav.Contact")}
              </NavLink>
            </li>
          </ul>
          <img src={logoIcon} alt="logo" />
        </div>
      )}
    </>
  );
};
