import Header from "../components/Header";
import Hero from "../components/Hero";
import TrendingSongs from "../components/TrendingSongs";
import TrendingVideos from "../components/TrendingVideos";
import RecentlyAdded from "../components/RecentlyAdded";
import Footer from "../components/Footer";
import { allVideos } from "../constants";

const Home = () => {
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
