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

export const Header = () => {
  const ChangeLang = () => {};

  const [menu, setMenu] = useState(true);

  !menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div id="header" className="container">
        {menu ? (
          <img className="menu" src={menuIcon} onClick={() => setMenu(!menu)} />
        ) : (
          <img
            className="menu"
            src={menuActive}
            onClick={() => setMenu(!menu)}
          />
        )}

        <div className="left-nav ">
          <ul>
            <li>
              <NavLink to={about}>About us</NavLink>
            </li>
            <li>
              <NavLink to={products}>Products</NavLink>
            </li>
            <li>
              <NavLink to={production}>Production</NavLink>
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
              <NavLink to={videos}>Videos</NavLink>
            </li>
            <li>
              <NavLink to={contact}>Contact</NavLink>
            </li>
          </ul>
          <Link className="lang" to="#">
            geo
          </Link>
        </div>
        <Link className="lang-mobile" to="#">
          geo
        </Link>
      </div>
      {!menu && <Burger />}
    </>
  );
};
