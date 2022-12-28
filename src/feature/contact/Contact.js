import React from "react";
import "./Contact.scss";
import { Mainlayout } from "../../core";
import { HomeTitle } from "../../shared";
import decor from "../../assets/svg/decor3.svg";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <Mainlayout>
      <div id="contact">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.566603257028!2d45.02262721503817!3d41.69605999737627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa99bac030caafa5f!2zIuGDkOGDnOGDmOGDkuGDneGDluGDmCI!5e0!3m2!1sen!2sge!4v1672248207799!5m2!1sen!2sge"
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
            <HomeTitle size="32px" title={t("Contact.Tittle")} />
            <ul>
              <li>{t("Contact.Location")}</li>
              <hr />
              <li>{t("Contact.Office")}</li>
              <hr />
              <li>(+995) 322 88 80 88</li>
              <hr />
              <li className="hed-title">{t("Contact.MidTittle")}</li>
              <hr />
              <li>
                (+995) 592 700 010 <span>WhatsApp</span>
              </li>
              <hr />
              <li>Ana@anigozi.com</li>
              <hr />
              <li className="hed-title">{t("Contact.MidTittle2")}</li>
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
              <p>{t("Contact.SubTittle")}</p>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
