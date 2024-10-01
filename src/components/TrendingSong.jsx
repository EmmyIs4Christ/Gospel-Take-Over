import React from "react";
import { Link } from "react-router-dom";

import AudioButton from "./AudioButton";

const TrendingSong = (props) => {
  const { img, title, url, id, audio, artist } = props;
  return (
    <div className="group transition-all duration-500 w-[250px] h-[300px] shrink-0 mr-2 relative">
      <div className="w-full h-[80%]">
        <Link to={url}>
          <img
            className="size-full object-cover"
            src={img}
            alt="song backgound image"
          />
        </Link>
      </div>
      <div className="text-center my-1">
        <h3>{artist}</h3>
        <p className="font-bold group-hover:text-[red]">{title}</p>
      </div>
      <div className="opacity-0 transition-all duration-500 place-items-center grid group-hover:opacity-[100%] bg-[red] size-[45px] rounded-full absolute right-2 top-[220px]">
        {<AudioButton audioSrc={audio} />}
      </div>
    </div>
  );
};

export default TrendingSong;
