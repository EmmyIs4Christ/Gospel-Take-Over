import React from "react";
import Song from "./Song";
import { shuffleArray } from "./RecentlyAdded";

const Songs = (props) => {
  const { allSong } = props;
  const shuffledSongs = shuffleArray(allSong);
  return (
    <section className="max-width relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">TRENDING SONGS</h2>
      </div>
      <div className="w-full group/parent items-stretch pb-1  scroll-smooth">
        {shuffledSongs.map((song) => (
          <Song
            key={song.id}
            img={song.bgImg}
            url={song.url}
            title={song.title}
            artist={song.artist}
            audio={song.audio}
            id={song.id}
            date={song.date}
            ft={song.ft}
          />
        ))}
      </div>
    </section>
  );
};

export default Songs;
