import React from "react";
import TrendingAlbum from "./TrendingAlbum";

import { rightDirection } from "../constants/svg";

import { Link } from "react-router-dom";

const TrendingAlbums = () => {
  return (
    <section className="max-width relative my-16 w-[95%] sm:py-0 ">
      <div className="flex-between my-5 w-full">
        <h2 className="font-bold text-lg">TRENDING Albums</h2>
        <Link className="text-[red] font-bold text-sm">VIEW ALL</Link>
      </div>
      <div
        style={{
          style: "none",
          scrollbarWidth: "none",
        }}
        className="w-full group/parent flex items-stretch overflow-x-auto pb-1 scroll- scroll-smooth"
      >
        <TrendingAlbum />
        <TrendingAlbum />
        <TrendingAlbum />
        <TrendingAlbum />
        <TrendingAlbum />
        <TrendingAlbum />

        <button className="absolute opacity-0 transition-all duration-500 group-hover/parent:opacity-100 size-20 rounded-full grid place-items-center bg-[red] right-0 top-[41%]">
          {rightDirection}
        </button>
      </div>
    </section>
  );
};

export default TrendingAlbums;
