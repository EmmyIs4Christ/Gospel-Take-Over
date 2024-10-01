import React, { useRef } from "react";
import TrendingSong from "./TrendingSong";
import { shuffleArray } from "./RecentlyAdded";

import { rightDirection } from "../constants/svg";

import { Link } from "react-router-dom";

import { allSongs } from "../constants";

const TrendingSongs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Scroll 300px left or right
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const shuffledSongs = shuffleArray(allSongs);
  return (
    <section className="max-width bg-[#121212] relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">TRENDING SONGS</h2>
        <Link to={"/songs"} className="text-[red] font-bold text-sm">
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
        {shuffledSongs.map((song) => (
          <TrendingSong
            key={song.id}
            img={song.bgImg}
            url={song.url}
            title={song.title}
            artist={song.artist}
            audio={song.audio}
            id={song.id}
          />
        ))}
        <button
          onClick={() => {
            scroll("right");
          }}
          className="absolute opacity-0 transition-all duration-500 group-hover/parent:opacity-100 size-20 rounded-full grid place-items-center bg-[red] right-0 top-[41%]"
        >
          {rightDirection}
        </button>
      </div>
    </section>
  );
};

export default TrendingSongs;
