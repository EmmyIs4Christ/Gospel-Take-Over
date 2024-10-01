import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { benAllVideos } from "../constants";
import TopTrack from "../components/TopTrack";
// import TrendingVideos from "../components/TrendingVideos";
import Videos from "../components/Videos";
import Songs from "../components/Songs";
import Song from "../components/Song";

import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";

// import { useParams, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { upImg, downImg } from "../utils";
import {
  userData,
  owners,
  benAudioThree,
  benVideos,
  allSongs,
  allVideos,
} from "../constants";

const User = () => {
  const owner = owners[0];
  // const params = useParams();
  const location = useLocation();
  const pathName = location.pathname;
  const targetSong = allSongs.filter((item) => item.url === pathName);
  // console.log(location, location.pathname);
  // console.log(targetSong);

  const [openBox, setOpenBox] = useState(false);

  const toggleBoxHandler = () => {
    setOpenBox((prevVal) => !prevVal);
  };

  const user = location.pathname.slice(1);

  const navLinks = [
    { title: "All", url: `/bengospel` },
    { title: "Top Tracks", url: `/bengospel/songs` },
    { title: "Videos", url: `/bengospel/videos` },
    { title: "Albums", url: `/bengospel/albums` },
  ];

  return (
    <>
      <Header />
      <main className="w-full mt-[75px] max-width py-2">
        <div className="relative h-[290px]">
          <img
            className="size-full object-cover"
            src={owner.profile}
            alt="background image"
          />
          <div className="absolute left-5 top-full border border-slate-700 -translate-y-[50px] sm:-translate-y-[100px] size-[100px] sm:size-[200px] overflow-hidden rounded-full">
            <img
              className="size-full object-cover"
              src={owner.dpImg}
              alt="display picture"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-5">
          <div className="mt-[55px] md:mr-5 md:w-[25%] sm:mt-[110px] ">
            <div className="relative  border-slate-700 border-b ">
              <div className="mb-2">
                <h1 className="text-[2rem] font-bold">{owner.user}</h1>
                <Link className="hover:underline hover:text-[red] text-gray-500 text-lg transition-all duration-500">
                  @bengospel
                </Link>
              </div>
              <button className="font-bold text-md ring-2 ring-[red] rounded-full mb-4 ">
                <Link to={"/login"} className="inline-block py-3 px-8">
                  FOLLOW
                </Link>
              </button>
              <button className="p-2 size-[30px] md:hidden bg-white absolute rounded-full right-5 bottom-3">
                <img
                  className="shrink-0"
                  onClick={toggleBoxHandler}
                  src={openBox ? `${upImg}` : `${downImg}`}
                  alt="arrow toggle images"
                />
              </button>
            </div>

            <div
              className={`my-4 ${
                openBox ? "h-[280px]" : "h-0"
              } border-slate-700 overflow-hidden transition-all duration-700  md:h-[280px] border-b`}
            >
              {userData.map((item, idx) => (
                <div key={idx} className="my-6">
                  <h4 className="font-extrabold text-4xl ">{item[0].value}</h4>
                  <h2 className="text-[red] font-bold  text-xl">
                    {item[0].title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-[75%] ">
            <div className="w-full ">
              <ul className="flex mt-[5px] justify-stretch py-3 w-full  border-b border-slate-700">
                {navLinks.map((link) => (
                  <li
                    key={link.title}
                    className="font-[600] sm:text-[1.3rem] mr-2"
                  >
                    {
                      <Link
                        // className={(navData) =>
                        //   navData.isActive
                        //     ? "border-b-2 p-3 px-2 border-[red] opacity-100"
                        //     : "opacity-50 p-3 border-transparent px-2"
                        // }
                        className={
                          link.url === pathName
                            ? "border-b-2 p-3 px-2 border-[red] opacity-100"
                            : "opacity-50 p-3 border-transparent px-2"
                        }
                        to={`${link.url}`}
                      >
                        {link.title}
                      </Link>
                    }
                  </li>
                ))}
              </ul>
            </div>

            <Routes>
              <Route
                element={
                  <div>
                    <div>
                      <div className="mt-[50px] flex-between">
                        <h2 className="font-bold text-2xl">Videos</h2>
                        {/* <Link className="text-[red] font-bold text-sm">VIEW ALL</Link> */}
                      </div>
                      <div>
                        <Videos allVideo={benVideos} />
                        <Link to={navLinks[2].url}>View More</Link>
                      </div>
                    </div>

                    <div>
                      <Songs allSong={benAudioThree} />
                      <Link to={navLinks[1].url}>View More</Link>
                    </div>

                    <div>
                      <div className="mt-[50px] flex-between">
                        <h2 className="font-bold text-2xl">Albums</h2>
                        <Link className="text-[red] font-bold text-sm">
                          VIEW ALL
                        </Link>
                      </div>
                      <div>
                        <h2>No Album Available</h2>
                      </div>
                    </div>
                  </div>
                }
                path=""
              />

              <Route
                element={
                  <div>
                    <div className="mt-[50px] flex-between">
                      <h2 className="font-bold text-2xl">Videos</h2>
                      {/* <Link className="text-[red] font-bold text-sm">VIEW ALL</Link> */}
                    </div>
                    <div>
                      <Videos allVideo={benAllVideos} />
                    </div>
                  </div>
                }
                path="videos"
              />

              <Route element={<Songs allSong={allSongs} />} path="songs" />

              <Route
                element={
                  <div>
                    <div className="mt-[50px] flex-between">
                      <h2 className="font-bold text-2xl">Albums</h2>
                      <Link className="text-[red] font-bold text-sm">
                        VIEW ALL
                      </Link>
                    </div>
                    <div>
                      <h2>No Album Available</h2>
                    </div>
                  </div>
                }
                path="albums"
              />

              <Route
                element={
                  targetSong.length > 0 && <Song id={targetSong[0].id} />
                }
                path="songs/:id"
              />
            </Routes>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default User;
