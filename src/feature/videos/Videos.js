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
import videos9 from "../../assets/videos9.jpg";
import videos10 from "../../assets/videos10.jpg";
import videos11 from "../../assets/videos11.jpg";
import videos12 from "../../assets/videos12.jpg";
import videos13 from "../../assets/videos13.jpg";
import videos14 from "../../assets/videos14.jpg";
import videos15 from "../../assets/videos15.jpg";
import { Video } from "../../shared";
import { useTranslation } from "react-i18next";

export const Videos = () => {
  const [videoLink, setVideoLink] = useState();

  const onClose = () => {
    setVideoLink("");
  };

  const { t } = useTranslation();

  const videos = [
    {
      title: t("Videos.VideoTittle.Video15"),
      url: "https://www.youtube.com/embed/XBjBK0zjCOU",
      photo: videos15,
    },
    {
      title: t("Videos.VideoTittle.Video14"),
      url: "https://www.youtube.com/embed/SJbCG58cOeA?si=ZHX8UbXEQLfgopay",
      photo: videos14,
    },

    {
      title: t("Videos.VideoTittle.Video13"),
      url: "https://www.youtube.com/embed/W8ZiXDSsZLQ?si=rORQQmtQdHF6rudx",
      photo: videos13,
    },
    {
      title: t("Videos.VideoTittle.Video12"),
      url: "https://www.youtube.com/embed/AUFHWJ67zI8?si=MBdbEc4zWUrwp6Mf",
      photo: videos12,
    },
    {
      title: t("Videos.VideoTittle.Video11"),
      url: "https://www.youtube.com/embed/lAp6zuy5xyQ?si=5HasI6HIBVQQqB-X",
      photo: videos11,
    },
    {
      title: t("Videos.VideoTittle.Video10"),
      url: "https://www.youtube.com/embed/XCUl52NoMZQ?si=7RV8PMvyTvFkzzPE",
      photo: videos10,
    },
    {
      title: t("Videos.VideoTittle.Video9"),
      url: "https://www.youtube.com/embed/IWvUq46D79c?si=vva6ZboRChAjpLIe",
      photo: videos9,
    },
    {
      title: t("Videos.VideoTittle.Video1"),
      url: "https://www.youtube.com/embed/FXT6-CGSi48?si=fzMTilaqUv6SrPyK",
      photo: videos1,
    },
    {
      title: t("Videos.VideoTittle.Video2"),
      url: "https://www.youtube.com/embed/XfSa7jSHXJs?si=OKdUDtVBG3ebovxg",
      photo: videos2,
    },
    {
      title: t("Videos.VideoTittle.Video3"),
      url: "https://www.youtube.com/embed/JH80LO7kLOU?si=P73U2LzoLmZ6p3iR",
      photo: videos3,
    },
    {
      title: t("Videos.VideoTittle.Video4"),
      url: "https://www.youtube.com/embed/aKnLYYgDcmU?si=g8V6N89GpTU4PJV7",
      photo: videos4,
    },
    {
      title: t("Videos.VideoTittle.Video5"),
      url: "https://www.youtube.com/embed/6TxoK9SDxsA?si=xrYFyxQtHl_6ffo0",
      photo: videos5,
    },
    {
      title: t("Videos.VideoTittle.Video6"),
      url: "https://www.youtube.com/embed/XlpSUVCmuio?si=_Xj4V3WRtQpvx32G",
      photo: videos6,
    },
    {
      title: t("Videos.VideoTittle.Video7"),
      url: "https://www.youtube.com/embed/XycdomDQbYY?si=erlxoOk2O7-U1ZCR",
      photo: videos7,
    },
    {
      title: t("Videos.VideoTittle.Video8"),
      url: "https://www.youtube.com/embed/-waNFyrGi8s?si=RrwkNgKshseNI7na",
      photo: videos8,
    },
  ];

  return (
    <>
      <Mainlayout>
        <div id="videos">
          <div className="cover container">
            <img src={decor} alt="decor" />
            <span>{t("Videos.Tittle")}</span>
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
        </div>
      </Mainlayout>
      {videoLink && <Video url={videoLink} onClose={onClose} />}
    </>
  );
};
