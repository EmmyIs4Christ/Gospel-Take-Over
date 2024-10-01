import React from "react";
import { logo } from "../utils";
import { playSvg } from "../constants/svg";

const TrendingAlbum = (props) => {
  return (
    <div className="group hover:text-[red] transition-all duration-500 w-[250px] h-[300px] shrink-0 mr-2 relative">
      <div className="w-full h-[80%]">
        <img className="size-full" src={logo} alt="song backgound image" />
      </div>
      <div className="text-center my-1">
        <h3>GIHU</h3>
        <p className="font-bold">Album</p>
      </div>
      <button className="opacity-0 transition-all duration-500 place-items-center grid group-hover:opacity-[100%] bg-[red] size-[45px] rounded-full absolute right-2 top-[220px]">
        {playSvg}
      </button>
    </div>
  );
};

export default TrendingAlbum;
