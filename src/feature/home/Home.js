import React from "react";
import "./Home.scss";
import { Mainlayout } from "../../core";
import graphic from "../../assets/graphic.png";
import anigozi1 from "../../assets/anigozi1.png";
import anigozi2 from "../../assets/anigozi2.png";
import production1 from "../../assets/production.png";
import production2 from "../../assets/production2.png";
import sertificate from "../../assets/sertificate.png";
import sertificate2 from "../../assets/sertificate2.png";
import sertLogo from "../../assets/svg/certifLogo.svg";
import Seemore from "../../shared/button/Seemore";
import { HomeP, HomeTitle } from "../../shared";
import support from "../../assets/svg/support.svg";
import standard from "../../assets/svg/stand.svg";
import rates from "../../assets/svg/rates.svg";
import decorTop from "../../assets/svg/decor.svg";
import decorBottom from "../../assets/svg/decorB.svg";
import { products, about, production } from "../../router";

const Cards = [
  {
    title: "Support",
    img: support,
    p: `We bring support to the grower before, 
    during and after the harvest.`,
  },
  {
    title: "Rates",
    img: rates,
    p: `We negotiate competitive process,
    materials and freight rates`,
  },
  {
    title: "Standards",
    img: standard,
    p: `We negotiate competitive process,
    materials and freight rates.`,
  },
];

export const Home = () => {
  return (
    <Mainlayout>
      <div id="home">
        <div className="section-1 container">
          <div className="graphic">
            <img src={graphic} alt="graphic" />
          </div>
          <h2>Quality from its origins</h2>
          <HomeP
            p="Anigozi walnuts are grown, sorted and packaged to meet the needs of
            food producers who cater to these mealtime opportunities. At every
            stage of operations, from the orchard all the way through to
            shipping, the company takes great care, producing walnuts that
            deliver all of the functional benefits, from flavor to nutrition,
            that processors and manufacturers expect."
          />
          <div className="top-btn btn">
            <Seemore
              link={about}
              color="#FE6F45"
              text="See more"
              textColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="section-2">
          <HomeTitle title="Products" />
          <HomeP
            p="Founded in 2015 and expanding quickly, the family-owned company from
            Georgia cultivates walnuts on an area of 500 hectare."
          />
          <div className="btn">
            <Seemore
              link={products}
              color="transparent"
              text="See more"
              textColor="#FE6F45"
            />
          </div>

          <div className="img-wrapper">
            <img src={anigozi1} alt="kakali" />
            <img src={anigozi2} alt="kakali garcheuli" />
          </div>
        </div>
        <div className="section-3">
          <HomeTitle title="Production" />
          <HomeP p="With a capacity of nearly 1 500 tons per year, Anigozi grows and processes walnuts in two formats, in-shell and kernels." />
          <div className="btn">
            <Seemore
              link={production}
              color="transparent"
              text="See more"
              textColor="#FE6F45"
            />
          </div>
          <div className="img-wrapper">
            <img src={production1} alt="production" />
            <img src={production2} alt="production " />
          </div>
        </div>
        <div className="section-4">
          <HomeTitle title="Certification" />
          <HomeP p="We are FSSC and HACCP certified, offering our partners only safe products in full conformity with international and local nut standards." />
          <img className="sertLogo" src={sertLogo} alt="sertlogo" />
          <div className="img-wrapper">
            <img src={sertificate} alt="sertificate" />
            <img src={sertificate2} alt="sertificate" />
          </div>
        </div>
        <div className="section-5">
          <div className="decorTop">
            {new Array(4).fill().map((el, key) => (
              <img src={decorTop} alt="decor" key={key} />
            ))}
          </div>
          <div className="cards container">
            {Cards.map((el, key) => (
              <div className="card" key={key}>
                <h2 className="cardTittle">{el.title}</h2>
                <img src={el.img} alt="decor" />
                <HomeP p={el.p} />
              </div>
            ))}
          </div>
          <div className="decorB">
            {new Array(4).fill().map((el, key) => (
              <img src={decorBottom} alt="decor" key={key} />
            ))}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};
