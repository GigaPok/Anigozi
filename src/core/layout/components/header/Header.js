import React from "react";
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

export const Header = () => {
  const ChangeLang = () => {};

  return (
    <div id="header" className="container">
      <div>
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
        <button>geo</button>
      </div>
    </div>
  );
};
