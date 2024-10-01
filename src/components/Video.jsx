import React from "react";

const Video = (props) => {
  const { url } = props;
  return (
    <div className="relative w-full h-[280px] shrink-0 mr-2 overflow-hidden bg-[#000} ">
      <iframe
        className="absolute top-0 left-0 size-full"
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
