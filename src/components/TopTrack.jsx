import React from "react";
import { benBgImg } from "../utils";

const TopTrack = () => {
  return (
    <div className="relative my-5 w-full h-[150px] border-b pb-4 border-b-slate-700 justify-stretch flex">
      <div className="cursor-pointer w-[30%] mr-4 sm:mr-6 overflow-hidden">
        <img
          className="size-full object-cover object-center"
          src={benBgImg}
          alt="audio background image"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="sm:text-2xl text-lg ">BenGospel</h2>
        <h3 className="sm:text-2xl text-lg  font-bold my-2">REIGN FOREVER</h3>
        <h2 className="sm:text-2xl text-lg ">
          Feat. <span className="text-[red] font-bold">Mary</span>
        </h2>
      </div>
      <div className="absolute bottom-2 space-x-4 right-1">
        <button>Download Audio</button>
        <button>Play Audio</button>
      </div>
    </div>
  );
};

export default TopTrack;
