import React from "react";
import "./Contact.scss";
import { Mainlayout } from "../../core";
import { HomeTitle } from "../../shared";
import decor from "../../assets/svg/decor3.svg";

export const Contact = () => {
  return (
    <Mainlayout>
      <div id="contact">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2975.514574264334!2d45.0231197!3d41.7741227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404415a71b15b8c9%3A0xe59a7b07fd320587!2sMartkopi!5e0!3m2!1sen!2sge!4v1671375947691!5m2!1sen!2sge"
            width="100%"
            height="228"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="wrapper">
          <div className="contact-info">
            <HomeTitle size="32px" title="Contact" />
            <ul>
              <li>Production: Martkopi village, 0103, Gardabani, Georgia</li>
              <hr />
              <li>Office: 6, Saakadze descent, 0160, Tbilisi, Georgia</li>
              <hr />
              <li>(+995) 322 88 80 88</li>
              <hr />
              <li className="hed-title">International Sales</li>
              <hr />
              <li>
                (+995) 592 700 010 <span>WhatsApp</span>
              </li>
              <hr />
              <li>Ana@anigozi.com</li>
              <hr />
              <li className="hed-title">Local Sales</li>
              <hr />
              <li>
                (+995) 557 94 10 91 <span>WhatsApp</span>
              </li>
              <hr />
              <li>Mari@anigozi.com</li>
            </ul>
          </div>
          <div className="decor">
            <div
              style={{ backgroundImage: `url(${decor})` }}
              className="backImage"
            >
              <p>
                Georgia is our passion. Quality from its origins. Quality from
                Georgia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
