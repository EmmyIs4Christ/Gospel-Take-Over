import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingSongs from "../components/TrendingSongs";
import TrendingVideos from "../components/TrendingVideos";
import TrendingAlbums from "../components/TrendingAlbums";
import RecentlyAdded from "../components/RecentlyAdded";
import Footer from "../components/Footer";
import Songs from "../components/Songs";
import { allVideos } from "../constants";

import { useParams, useLocation } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <>
      <Header />
      <Hero />
      <TrendingSongs />
      <TrendingVideos allVideos={allVideos} />
      {/* {location.pathname === "/" && <TrendingAlbums />} */}
      <RecentlyAdded />

      <Footer />
    </>
  );
};

export default Home;
