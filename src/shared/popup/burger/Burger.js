import React from "react";
import "./Burger.scss";
import { videos, production, contact, about, products } from "../../../router";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/svg/decor3.svg";
import { useTranslation } from "react-i18next";

const Burger = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="burger">
      <ul>
        <li>
          <NavLink to={about}>{t("nav.About")}</NavLink>
          <NavLink to={products}>{t("nav.Product")}</NavLink>
          <NavLink to={production}>{t("nav.Production")}</NavLink>
          <NavLink to={videos}>{t("nav.Videos")}</NavLink>
          <NavLink to={contact}>{t("nav.Contact")}</NavLink>
        </li>
      </ul>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Burger;
