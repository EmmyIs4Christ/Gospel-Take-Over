import React, { useRef } from "react";

import { Link } from "react-router-dom";
import TrendingVideo from "./TrendingVideo";
import { rightDirection } from "../constants/svg";
import { shuffleArray } from "./RecentlyAdded";

const TrendingVideos = (props) => {
  const scrollRef = useRef(null);

  const shuffledArr = shuffleArray(props.allVideos);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Scroll 300px left or right
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="max-width bg-[#121212] relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">TRENDING VIDEOS</h2>
        <Link to={"/videos"} className="text-[red] font-bold text-sm">
          VIEW ALL
        </Link>
      </div>
      <div
        ref={scrollRef}
        style={{
          style: "none",
          scrollbarWidth: "none",
        }}
        className="w-full group/parent flex items-stretch overflow-x-auto pb-1 scroll- scroll-smooth"
      >
        {shuffledArr.map((video, idx) => {
          if (idx > 5) {
            return;
          } else {
            return <TrendingVideo key={idx} url={video} />;
          }
        })}
        <button
          onClick={() => scroll("right")}
          className="absolute opacity-0 transition-all duration-500 group-hover/parent:opacity-100 size-20 rounded-full grid place-items-center bg-[red] right-0 top-[41%]"
        >
          {rightDirection}
        </button>
      </div>
    </section>
  );
};

export default TrendingVideos;
