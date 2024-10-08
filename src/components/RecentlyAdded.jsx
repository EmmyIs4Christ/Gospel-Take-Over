import React, { useRef } from "react";
import TrendingSong from "./TrendingSong";

import { rightDirection } from "../constants/svg";
import { allSongs } from "../constants";

import { Link } from "react-router-dom";

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const RecentlyAdded = () => {
  // Enabling scroll in the X direction
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Scroll 300px left or right
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Shuffling content when component is rendered to make the page look dynamic
  const shuffledSongs = shuffleArray(allSongs);
  return (
    <section className="max-width bg-[#121212] relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">Recently Added</h2>
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
        {shuffledSongs.map((song, idx) => {
          // Rendering some not all to reduce loading time
          if (idx > 5) {
            return;
          } else {
            return (
              <TrendingSong
                key={song.id}
                img={song.bgImg}
                title={song.title}
                url={song.url}
                artist={song.artist}
                audio={song.audio}
                id={song.id}
              />
            );
          }
        })}
        {/* Button to scroll to right */}
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

export default RecentlyAdded;
