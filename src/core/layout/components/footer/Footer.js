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
import ebrd from "../../../../assets/svg/ebrd.svg";
import eugeorgia from "../../../../assets/svg/eu.svg";
import og from "../../../../assets/svg/og.svg";
import USAID from "../../../../assets/svg/USAID.svg";
import phoneIcon from "../../../../assets/svg/phone.svg";
import mapIcon from "../../../../assets/svg/map.svg";
import mailIcon from "../../../../assets/svg/mail.svg";
import fbIcon from "../../../../assets/svg/fbIcon.svg";
import instIcon from "../../../../assets/svg/instIcon.svg";
import linkIcon from "../../../../assets/svg/linkedin.svg";
import twitIcon from "../../../../assets/svg/twitIcon.svg";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-header container">
        <img src={logo} alt="avigozi logo" />
        <div>
          <ul>
            <li>
              <Link to={home}>home</Link>
            </li>
            <li>
              <Link to={about}>about us</Link>
            </li>
            <li>
              <Link to={products}>products</Link>
            </li>
            <li>
              <Link to={production}>production</Link>
            </li>
            <li>
              <Link to={videos}>videos</Link>
            </li>
            <li>
              <Link to={contact}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="support-wrapper container">
        <span>Supported by</span>
        <img src={eugeorgia} alt="eugeorgia logo" />
        <img src={ebrd} alt="ebrd logo" />
        <img src={og} alt="og logo" />
        <img src={USAID} alt="USAID logo" />
      </div>
      <div className="container footer-contact">
        <div>
          <ul>
            <li>
              <img src={phoneIcon} alt="phone icon" />
              <div className="phone-numbers">
                <span>(+995) 322 88 80 88</span>
                <span>(+995) 592 700 010</span>
              </div>
            </li>
            <li>
              <img src={mailIcon} alt="mail icon" />
              <span>ana@anigozi.com</span>
            </li>
            <li>
              <img src={mapIcon} alt="map icon" />
              <span>Martkopi village, 0103, Gardabani, Georgia</span>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <Link to="#">
                <img src={fbIcon} alt="facebook icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={instIcon} alt="instagram icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={twitIcon} alt="twitter icon" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={linkIcon} alt="linkedin icon" />
              </Link>
            </li>
          </ul>
          <span>all rights reserved © 2022</span>
        </div>
      </div>
    </div>
  );
};
