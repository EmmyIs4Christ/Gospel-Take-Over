import React from "react";

import Video from "./Video";

const Videos = (props) => {
  const { allVideo } = props;
  return (
    <section className="max-width relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">TRENDING Videos</h2>
      </div>
      <div className="w-full flex flex-wrap space-y-4 pb-1  scroll-smooth">
        {allVideo.map((video, idx) => (
          <Video key={idx} url={video} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
