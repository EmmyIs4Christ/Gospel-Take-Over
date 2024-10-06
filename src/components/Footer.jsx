import React from "react";

import { logo } from "../utils";

import { socialMediaSVGs, footerLinksOne, footerLinksTwo } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  // use current date
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="mt-8 w-full p-3 text-white bg-[#121212]">
        <div className="flex flex-col  max-width">
          <div className="logoContainer size-[100px] my-3">
            <img
              src={logo}
              className="object-center object-contain"
              alt="icon image"
            />
          </div>

          <div className="md:flex-center md:flex-row flex flex-col my-4 md:space-x-8 font-bold text-lg">
            {footerLinksOne.map((item, idx) => (
              <Link className="my-1" key={idx}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex-center my-4 space-x-8">
            {socialMediaSVGs.map((item, idx) => (
              <Link target="_blank" to={item.url} key={idx}>
                {item.svg}
              </Link>
            ))}
          </div>

          <div className=" text-[0.7rem] my-4 text-left md:text-center">
            <p>
              Gospel Take Over is an on-demand music streaming and audio
              discovery platform that allows artists and creators to upload
              limitless music and podcasts for listeners through its mobile apps
              and website.
            </p>
          </div>

          <div className="md:flex-center md:flex-row flex flex-col my-4 md:space-x-8 font-medium">
            {footerLinksTwo.map((item, idx) => (
              <Link to={item.url} className="my-1" key={idx}>
                {item.title}
              </Link>
            ))}
          </div>

          <p className="text-center font-light text-sm my-6">
            © {currentYear} Ugwu Emmanuel Ifeanyi - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
