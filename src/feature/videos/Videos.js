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
import { Video } from "../../shared";

const videos = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/embed/kExwsD3bpMo",
    photo: videos1,
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/embed/kHcgsH1R4OE",
    photo: videos2,
  },
  { title: "Video 3", url: "url", photo: videos3 },
  { title: "Video 4", url: "url", photo: videos4 },
  { title: "Video 5", url: "url", photo: videos5 },
  { title: "Video 6", url: "url", photo: videos6 },
  { title: "Video 7", url: "url", photo: videos7 },
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
            <img src={decor} />
            <span>
              Please, check the information and news of our business below.
            </span>
            <img src={decor} />
          </div>
          <div className="videos-wrapper container">
            {videos.map((el, key) => (
              <div
                key={key}
                className="box"
                onClick={() => setVideoLink(el.url)}
              >
                <span>{el.title}</span>
                <img src={el.photo} />
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
