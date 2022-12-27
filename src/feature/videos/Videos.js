import React, { useState } from "react";
import "./Videos.scss";
import { Mainlayout } from "../../core";
import decor from "../../assets/svg/decor3.svg";
import videos1 from "../../assets/videos1.png";
import videos2 from "../../assets/videos2.png";
import videos3 from "../../assets/videos3.png";
import videos4 from "../../assets/videos4.png";
import videos5 from "../../assets/videos5.png";
import videos6 from "../../assets/videos6.png";
import videos7 from "../../assets/videos7.png";
import videos8 from "../../assets/videos8.png";
import { Video } from "../../shared";

const videos = [
  {
    url: "https://www.youtube.com/embed/ODTtB551d28",
    photo: videos1,
  },
  {
    url: "https://www.youtube.com/embed/H0sJ11TqprM",
    photo: videos2,
  },
  {
    url: "https://www.youtube.com/embed/26y5lGDK2Mk",
    photo: videos3,
  },
  {
    url: "https://www.youtube.com/embed/S3BpGnkk51c",
    photo: videos4,
  },
  {
    url: "https://www.youtube.com/embed/4XevNo9ca4o",
    photo: videos5,
  },
  {
    url: "https://www.youtube.com/embed/JjXmV3tdR7k",
    photo: videos6,
  },
  {
    url: "https://www.youtube.com/embed/XxG8lH6-W7M",
    photo: videos7,
  },
  {
    url: "https://www.youtube.com/embed/-s2yznWZ0vw",
    photo: videos8,
  },
];

export const Videos = () => {
  const [videoLink, setVideoLink] = useState();

  const onClose = () => {
    setVideoLink("");
  };

  return (
    <>
      <Mainlayout>
        <div id="videos">
          <div className="cover container">
            <img src={decor} alt="decor" />
            <span>
              Please, check the information and news of our business below.
            </span>
            <img src={decor} alt="decor" />
          </div>
          <div className="videos-wrapper container">
            {videos.map((el, key) => (
              <div
                key={key}
                className="box"
                onClick={() => setVideoLink(el.url)}
              >
                <span>{el.title}</span>
                <img src={el.photo} alt="decor" />
              </div>
            ))}
          </div>
          <span>X</span>
        </div>
      </Mainlayout>
      {videoLink && <Video url={videoLink} onClose={onClose} />}
    </>
  );
};
