import React from "react";
import "./Header.scss";
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

export const Header = () => {
  const ChangeLang = () => {};

  // const [active, setActive] = useState(2);

  return (
    <div id="header" className="container">
      <div>
        <ul>
          <li>
            <Link to={about}>About us</Link>
          </li>
          <li>
            <Link to={products}>Products</Link>
          </li>
          <li>
            <Link to={production}>Production</Link>
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
            <Link to={videos}>Videos</Link>
          </li>
          <li>
            <Link to={contact}>Contact</Link>
          </li>
        </ul>
        <button>geo</button>
      </div>
    </div>
  );
};
