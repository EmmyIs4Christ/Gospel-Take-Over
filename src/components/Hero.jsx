import React from "react";
import { banner } from "../utils";


import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const uploadHandler = () => {
    navigate("/login");
  };
  return (
    <div
      className="w-[95%] max-width py-2  mt-[85px] bg-cover border border-[#ffffff1a] shadow-lg bg-left md:bg-center bg-no-repeat max-h-[500px] h-[50vh] bg-[#121212]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="size-full  flex justify-center  items-center">
        <div className="grid text-center  justify-evenly w-[90%]  h-full sm:p-4 place-items-center">
          <div className="bg-[#121212] px-2 sm:px-8 flex flex-col py-2 sm:py-5 w-full border border-[#ffffff1a] shadow-lg">
            <h1 className="text-[1.8rem] sm:my-4 flex-wrap font-extrabold">
              The music platform{" "}
              <span className="text-[red]">empowering artists.</span>
            </h1>
            <p className="text-lg mb-4">
              Gopel Take Over is an artist-first music platform that helps{" "}
              <br />
              musicians{" "}
              <span className="font-bold">
                reach and engage fans across the world.
              </span>
            </p>
            <button
              onClick={uploadHandler}
              className="rounded-full btnEffect inline-block mx-auto min-w-[250px] w-[50%] py-2"
            >
              Upload your music for FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
