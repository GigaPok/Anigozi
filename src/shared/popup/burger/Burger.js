import React from "react";
import "./Burger.scss";
import { videos, production, contact, about, products } from "../../../router";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/svg/decor3.svg";

const Burger = () => {
  return (
    <div className="burger">
      <ul>
        <li>
          <NavLink to={about}>About us</NavLink>
          <NavLink to={products}>Products</NavLink>
          <NavLink to={production}>Production</NavLink>
          <NavLink to={videos}>Videos</NavLink>
          <NavLink to={contact}>Contact</NavLink>
        </li>
      </ul>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Burger;
