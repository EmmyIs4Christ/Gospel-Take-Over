import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { logo } from "../utils";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="text-center relative opacity-80">
        <h1 className="font-bold text-[2.5rem] mt-[95px]">404</h1>
        <h2 className="font-bold text-lg">PAGE NOT FOUND</h2>
        <div className=" ">
          <img
            className="opacity-40 size-[250px] rounded-full my-10 mx-auto"
            src={logo}
            alt="gospel take over logo"
          />
          <Link
            to={"/"}
            className="rounded-full hover:bg-[#ff0000be] ring-offset-1 hover:ring-slate-400 hover:text-slate-200 bg-[red] ring-1 inline-block mx-auto min-w-[250px] w-[50%] py-2"
          >
            GET BACK TO SITE
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PageNotFound;
