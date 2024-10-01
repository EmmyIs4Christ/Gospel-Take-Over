import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RecentlyAdded from "../components/RecentlyAdded";
import PageNotFound from "./PageNotFound";
import Songs from "../components/Songs";
import Videos from "../components/Videos";
import { allSongs } from "../constants";
import { allVideos } from "../constants";

import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const location = useLocation();

  const { type } = params;

  if (type !== "songs" && type !== "videos") {
    return <PageNotFound />;
  }

  return (
    <>
      <Header />
      <Hero />
      {type === "songs" && <Songs allSong={allSongs} />}
      {type === "videos" && <Videos allVideo={allVideos} />}
      <RecentlyAdded />
      <Footer />
    </>
  );
};

export default Detail;
