import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

import { icon } from "../utils";
import { homeLinks, upComingLinks } from "../constants";

const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus on form input function
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Functions for handling side bar
  const showBarHandler = () => {
    setShowBar(true);
  };
  const closeBarHandler = () => {
    setShowBar(false);
  };

  // Toggle and focus form input function
  const setMobileSearchHandler = () => {
    setMobileSearch((prev) => !prev);
    let focusTimout = setTimeout(() => {
      focusInput();
      clearTimeout(focusTimout);
    }, 500);
  };

  // States for the search input and the results
  const [searchTerm, setSearchTerm] = useState("");

  // Handler for input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for form submission
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?${searchTerm}`);
  };

  return (
    <header className="w-full fixed z-30 right-0 left-0 top-0 h-[70px] shadow-lg p-4 text-[#515050] bg-white">
      {/* SIDE BAR for Mobile devices starts here */}
      <div
        className={`absolute bg-[#121212] w-[100vw] ${
          !showBar ? "-translate-x-[110%]" : "translate-x-0"
        }  h-[100vh] top-0 left-0 right-0 bottom-0 z-20 transition-all duration-500 p-8`}
      >
        <div className="size-full ">
          <div className="w-full my-4 border-slate-700 border-b   text-right">
            <span
              onClick={closeBarHandler}
              className="font-thin text-[2rem] text-white"
            >
              ☒
            </span>
          </div>
          <div className="flex flex-col text-white  my-2 border-slate-700 border-b">
            {homeLinks.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                onClick={closeBarHandler}
                className={`my-2 ${link.id === 1 ? "font-bold text-lg" : ""}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-white  my-2 border-slate-700 border-b">
            {upComingLinks.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                onClick={closeBarHandler}
                className={`my-2 ${link.id === 1 ? "font-bold text-lg" : ""}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-white  my-2 border-slate-700 border-b">
            <Link
              to={"/login"}
              onClick={closeBarHandler}
              className={`my-2 font-bold text-lg`}
            >
              UPLOAD
            </Link>
          </div>
        </div>
      </div>
      {/* Side bar for mobile devices ends here */}

      {/* NAV BAR STARTS FROM HERE  */}
      <nav className="flex-between  items-center h-[50px] max-w-7xl mx-auto  ">
        <div className="flex justify-evenly h-full">
          <ul className="flex-between space-x-1 sm:space-x-2 items-center">
            <li onClick={showBarHandler}>
              <div className="size-[30px] cursor-pointer grid place-items-center lg:hidden">
                <svg
                  viewBox="0 0 16 12"
                  fill="#515050"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12H16V10H0V12ZM0 7H16V5H0V7ZM0 0V2H16V0H0Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </li>
            <li className="">
              <Link className="flex-center  h-full" to={"/"}>
                <img
                  className="size-[30px] object-cover"
                  src={icon}
                  alt="icon"
                />
                {!mobileSearch && (
                  <div className="flex font-[600] flex-col -ml-1 align-middle">
                    <h3 className="mt-1  tracking-tight text-sm">
                      GospelTakeOver
                    </h3>
                    <h3 className="-mt-2 text-sm tracking-[0.8rem] ">MUSIC</h3>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-1 mr-5 flex-1 space-x-4 ">
          <div
            className={`${
              mobileSearch ? "block" : "hidden"
            } sm:block relative w-full lg:w-[60%]`}
          >
            <div className="w-6 z-10 inset-y-0 left-0 flex items-center pl-2 absolute h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#e31621"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </div>

            <div className="w-full ">
              <form onSubmit={handleSearch} action="">
                <input
                  ref={inputRef}
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="w-[100%] left-0 right-2 top-0  block placeholder:italic text-black font-[600] pl-9 py-2 rounded-full border-slate-700 shadow-sm bg-slate-200 focus:outline-none focus:border-[#515050] focus:ring-offset-2 focus:ring-[#515050] focus:ring-1"
                  type="text"
                  placeholder="Search for songs, artists, albums!"
                />
              </form>
            </div>
          </div>

          <div className="hidden lg:block w-[40%]">
            <ul className="flex-center -tracking-[1px] text-md font-bold space-x-2">
              <li>
                <NavLink
                  to={"/"}
                  className={(link) =>
                    link.isActive
                      ? "text-[red] hover:text-[#ac3b3b]"
                      : "hover:text-[#ac3b3b]"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/up_comings"}
                  className={(link) =>
                    link.isActive
                      ? "text-[red] hover:text-[#ac3b3b] flex whitespace-nowrap"
                      : "hover:text-[#ac3b3b] flex whitespace-nowrap"
                  }
                >
                  UPCOMING EVENTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-center align-middle">
          <ul className="flex-between font-bold  space-x-2">
            <li className="hidden md:block">
              <NavLink
                className={(link) =>
                  link.isActive
                    ? "text-[red] hover:text-[red]"
                    : "hover:text-[red]"
                }
                to={"/join"}
              >
                Create an Account
              </NavLink>
            </li>
            <li className="hidden md:block">
              <span className="text-[red]">|</span>
            </li>
            <li className="hidden md:block">
              <NavLink
                className={(link) =>
                  link.isActive
                    ? "text-[red] hover:text-[red]"
                    : "hover:text-[red]"
                }
                to={"/login"}
              >
                Sign In
              </NavLink>
            </li>
            <li className="hidden md:block">
              <Link
                to={"/login"}
                className="flex-center group shadow-sm hover:bg-slate-300  space-x-2 px-4 py-2 rounded-full bg-slate-200"
              >
                <div className="size-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      className="group-hover:fill-red-700"
                      fill="red"
                      d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                    />
                  </svg>
                </div>
                <h3 className="font-[800] group-hover:text-black">UPLOAD</h3>
              </Link>
            </li>
            <li className="sm:hidden">
              <div onClick={setMobileSearchHandler} className="w-5  h-5">
                {mobileSearch ? (
                  <span>X</span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="black"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    />
                  </svg>
                )}
              </div>
            </li>
            <li className="md:hidden">
              <Link to={"/login"}>
                <div className="w-5 h-5 bg-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="black"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
