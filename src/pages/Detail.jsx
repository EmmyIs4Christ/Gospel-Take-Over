import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageNotFound from "./PageNotFound";
import Songs from "../components/Songs";
import Videos from "../components/Videos";
import { allSongs } from "../constants";
import { allVideos } from "../constants";

import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

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
      <Footer />
    </>
  );
};

export default Detail;
