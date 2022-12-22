import React from "react";
import "./About.scss";
import { Mainlayout } from "../../core";
import contactCover from "../../assets/contactCover.png";
import aginoziabout from "../../assets/aginoziabout.png";
import { HomeTitle } from "../../shared";

export const About = () => {
  return (
    <Mainlayout>
      <div id="about">
        <img src={contactCover} alt="contactCover" />
        <div className="about container">
          <div>
            <HomeTitle size="32px" title="About us" />
            <p>
              Founded in 2015 and expanding quickly, the family-owned company
              from Georgia cultivates walnuts on an area of 500 hectare. Anigozi
              is one of the first walnut processing factory in the country. Raw
              material is purchased directly from farmers' orchards and follows
              to our production facilities for prompt processing, allowing to
              preserve freshness, colour and nutritional benefits of the fruit.
              <br />
              <br />
              We are carefully controlling the quality and traceability of our
              nuts all the way from our plantations to our customers.
              <br />
              <br />
              Anigozi walnuts are grown, sorted and packaged to meet the needs
              of food producers who cater to these mealtime opportunities. At
              every stage of operations, from the orchard all the way through to
              shipping, the company takes great care, producing walnuts that
              deliver all of the functional benefits, from flavor to nutrition,
              that processors and manufacturers expect.
            </p>
          </div>
          <img src={aginoziabout} alt="aginozAbout" />
        </div>
      </div>
    </Mainlayout>
  );
};
