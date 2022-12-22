import React from "react";
import "./Video.scss";

export const Video = ({ url, onClose }) => {
  return (
    <div className="popup">
      <iframe
        width="70%"
        height="50%"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <span className="close" onClick={onClose}>
        X
      </span>
    </div>
  );
};
