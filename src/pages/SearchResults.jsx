import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentlyAdded from "../components/RecentlyAdded";
import { allSongs } from "../constants";
import Song from "../components/Song";

// Getting the names of all artists
const artists = allSongs.map((item) => {
  return { search: item.artist, id: item.id };
});

// Getting the title of all songs
const songs = allSongs.map((item) => {
  return { search: item.title, id: item.id };
});

// Combine both arrays to one so as to easily interat and search for artist or song
const wordList = artists.concat(songs);

// Fetching the search result via useLocation
const SearchResults = () => {
  const location = useLocation();
  const searchTerm = location.search;

  // Replace "?", "%", and "20" in the string
  let updatedString = searchTerm.replace(/[?]/g, "").replace(/%20/g, " ");

  // Filter the words based on the search term (case-insensitive)
  const results = wordList.filter((word) =>
    word.search.toLowerCase().includes(updatedString.toLowerCase())
  );

  const uniqueArray = results.reduce((acc, current) => {
    // Check if the id already exists in the accumulated array
    if (!acc.some((item) => item.id === current.id)) {
      acc.push(current); // Add the current element if the id is unique
    }
    return acc; // Return the accumulator for the next iteration
  }, []);

  return (
    <>
      <Header />
      <div className="mt-[100px] w-[95%] mx-auto">
        {/* Rendering search result(s) */}
        {uniqueArray.length > 0 &&
          uniqueArray.map((item) => <Song key={item.id} id={item.id} />)}

        {/* Fall back if no result was found */}
        {uniqueArray.length === 0 && (
          <div>
            <h2 className="text-center font-[600] text-2xl">
              No Search Result Found!
            </h2>
          </div>
        )}
      </div>
      <RecentlyAdded />
      <Footer />
    </>
  );
};

export default SearchResults;
