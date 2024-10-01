import React from "react";
import AudioPlayer from "./AudioPlayer";
import ShareButton from "./ShareButton";
import { Link } from "react-router-dom";
import { allSongs } from "../constants";

const Song = (props) => {
  const song = allSongs.filter((item) => item.id === props.id);
  // console.log(song[0], props);
  const { bgImg, url, ft, title, artist, audio, id, date } = song[0];
  return (
    <div className="group rounded-lg  transition-all duration-500 w-full my-8 shrink-0 mr-2 relative">
      <div className="flex rounded-lg r bg-[#121212] justify-start">
        <div className="size-[200px] rounded-ss-lg rounded-b-none overflow-hidden">
          <Link to={url}>
            <img
              className="size-full object-cover"
              src={bgImg}
              alt="song backgound image"
            />
          </Link>
        </div>
        <div className="grid place-items-center p-3">
          <div>
            <h3 className="text-lg font-[600]">{artist}</h3>
            <Link to={url} className="font-bold text-2xl">
              {title}
            </Link>
            {ft !== "" && (
              <p className="font-bold">
                Feat. <span className="text-[red]">{ft}</span>
              </p>
            )}
            <p>
              Release Date: <span className="font-bold">{date}</span> by{" "}
              <span className="text-[red] font-bold">{artist}</span>
            </p>
            <ShareButton />
          </div>
        </div>
      </div>
      <AudioPlayer audioSrc={audio} track={title} />
    </div>
  );
};

export default Song;
