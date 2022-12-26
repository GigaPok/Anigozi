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
import Burger from "../../../../shared/popup/burger/Burger";
import { useTranslation } from "react-i18next";

export const Header = () => {
  function languange(lang) {
    i18n.changeLanguage(lang);

    setGe(!ge);
  }
  const { t, i18n } = useTranslation();

  const [ge, setGe] = useState(true);
  const [menu, setMenu] = useState(true);

  !menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div id="header" className="container">
        {menu ? (
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
          {ge ? (
            <Link className="lang" onClick={() => languange("ge")}>
              geo
            </Link>
          ) : (
            <Link className="lang" onClick={() => languange("en")}>
              en
            </Link>
          )}
        </div>
        <Link className="lang-mobile" to="#">
          geo
        </Link>
      </div>
      {!menu && <Burger />}
    </>
  );
};
